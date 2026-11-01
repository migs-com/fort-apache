import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import type { ContactInput } from '@/lib/contact-schema';

const apiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL || 'contact@fort-apache-equitation-vence.fr';

// Envoi par la boîte du domaine chez O2switch (voie retenue le 01/11/2026).
// La boîte contact@ reçoit le message et le renvoie à Pénélope (redirecteur cPanel).
// Seul le mot de passe de la boîte est à poser dans Vercel : SMTP_PASSWORD.
const smtpPassword = process.env.SMTP_PASSWORD;
const smtpUser = process.env.SMTP_USER || 'contact@fort-apache-equitation-vence.fr';
const smtpHost = process.env.SMTP_HOST || 'cocatrix.o2switch.net';
const smtpPort = Number(process.env.SMTP_PORT || 465);

const fromEmail =
  process.env.CONTACT_FROM_EMAIL ||
  (smtpPassword
    ? `Site Fort Apache <${smtpUser}>`
    : 'Fort Apache <onboarding@resend.dev>');

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendContactEmail(data: ContactInput) {
  if (!apiKey && !smtpPassword) {
    // Sans clé d'envoi, le message ne peut pas partir. En production, on le
    // dit au visiteur au lieu de simuler un succès : sinon la demande est
    // perdue sans que personne le sache. En développement, on garde le mode test.
    // eslint-disable-next-line no-console
    console.warn('[contact] SMTP_PASSWORD et RESEND_API_KEY absents : message non envoye.');
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Aucun service d envoi configure');
    }
    return { id: 'dev-mode', dev: true } as const;
  }

  const subject = `Nouveau contact Fort Apache : ${escapeHtml(
    data.prenom
  )} ${escapeHtml(data.nom)}`;

  const html = `
    <div style="font-family: system-ui, sans-serif; color: #1C1C1C; max-width: 600px;">
      <h2 style="color: #2C4A2E; font-family: Georgia, serif;">Nouvelle demande de contact</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 6px 0; color: #7B2D3E; font-weight: 600;">Nom</td><td>${escapeHtml(data.nom)}</td></tr>
        <tr><td style="padding: 6px 0; color: #7B2D3E; font-weight: 600;">Prénom</td><td>${escapeHtml(data.prenom)}</td></tr>
        <tr><td style="padding: 6px 0; color: #7B2D3E; font-weight: 600;">Email</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #7B2D3E; font-weight: 600;">Téléphone</td><td>${escapeHtml(data.telephone)}</td></tr>
        ${data.age ? `<tr><td style="padding: 6px 0; color: #7B2D3E; font-weight: 600;">Âge</td><td>${escapeHtml(String(data.age))}</td></tr>` : ''}
        ${data.niveau ? `<tr><td style="padding: 6px 0; color: #7B2D3E; font-weight: 600;">Niveau</td><td>${escapeHtml(data.niveau)}</td></tr>` : ''}
        ${data.objet ? `<tr><td style="padding: 6px 0; color: #7B2D3E; font-weight: 600;">Objet</td><td>${escapeHtml(data.objet)}</td></tr>` : ''}
      </table>
      ${
        data.message
          ? `<h3 style="color: #2C4A2E; margin-top: 24px;">Message</h3>
             <p style="background: #F5F0E8; padding: 16px; border-left: 3px solid #7B2D3E; white-space: pre-wrap;">${escapeHtml(data.message)}</p>`
          : ''
      }
      <hr style="border: none; border-top: 1px solid #C9B99A; margin: 24px 0;" />
      <p style="font-size: 12px; color: #888;">Message envoyé depuis le formulaire de contact fort-apache-equitation-vence.fr</p>
    </div>
  `;

  const text = [
    `Nouvelle demande de contact`,
    ``,
    `Nom      : ${data.nom}`,
    `Prénom   : ${data.prenom}`,
    `Email    : ${data.email}`,
    `Téléphone: ${data.telephone}`,
    data.age ? `Âge      : ${data.age}` : null,
    data.niveau ? `Niveau   : ${data.niveau}` : null,
    data.objet ? `Objet    : ${data.objet}` : null,
    ``,
    data.message ? `Message :\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  if (smtpPassword) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPassword },
    });
    const info = await transporter.sendMail({
      from: fromEmail,
      to: contactEmail,
      replyTo: data.email,
      subject,
      html,
      text,
    });
    return { id: info.messageId ?? null, dev: false } as const;
  }

  const resend = new Resend(apiKey);
  const response = await resend.emails.send({
    from: fromEmail,
    to: contactEmail,
    replyTo: data.email,
    subject,
    html,
    text,
  });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return { id: response.data?.id ?? null, dev: false } as const;
}
