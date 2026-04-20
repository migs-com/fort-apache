import { Resend } from 'resend';
import type { ContactInput } from '@/lib/contact-schema';

const apiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL || 'contact@fort-apache-equitation-vence.fr';
const fromEmail =
  process.env.CONTACT_FROM_EMAIL || 'Fort Apache <onboarding@resend.dev>';

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendContactEmail(data: ContactInput) {
  if (!apiKey) {
    // In dev without a key, log and treat as success so the form works in test mode.
    // eslint-disable-next-line no-console
    console.warn(
      '[resend] RESEND_API_KEY not set — email not sent. Data:',
      data
    );
    return { id: 'dev-mode', dev: true } as const;
  }

  const resend = new Resend(apiKey);

  const subject = `Nouveau contact Fort Apache — ${escapeHtml(
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
