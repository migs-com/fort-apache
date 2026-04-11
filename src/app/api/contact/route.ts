import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contact-schema';
import { sendContactEmail } from '@/lib/resend';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Requête invalide' },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Données invalides',
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // Honeypot — silently accept and discard obvious bots
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true, spam: true });
  }

  try {
    const result = await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true, id: result.id, dev: result.dev });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[contact] send failed', e);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 500 }
    );
  }
}
