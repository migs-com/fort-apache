'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  makeContactSchema,
  niveaux,
  objets,
  niveauEnToFr,
  type ContactInput,
} from '@/lib/contact-schema';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full rounded-md border border-sable/60 bg-white px-4 py-3 text-charbon placeholder-charbon/40 focus:border-foret focus:outline-none focus:ring-2 focus:ring-foret/20 transition';
const labelClass =
  'block text-sm font-medium text-foret-dark mb-1.5';
const errorClass = 'text-xs text-bordeaux mt-1';

type Strings = {
  ariaLabel: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  riderAge: string;
  riderAgeHelper: string;
  level: string;
  levelPlaceholder: string;
  subject: string;
  subjectPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  website: string;
  submitNormal: string;
  submitSending: string;
  requiredNotice: string;
  successHeading: string;
  successParagraph: string;
  successReset: string;
  serverErrorFallback: string;
  unknownError: string;
  firstNameShort: string;
  lastNameShort: string;
  emailInvalid: string;
  phoneShort: string;
  phoneInvalid: string;
};

const frStrings: Strings = {
  ariaLabel: 'Formulaire de contact',
  firstName: 'Prénom',
  lastName: 'Nom',
  email: 'Email',
  phone: 'Téléphone',
  riderAge: 'Âge du cavalier',
  riderAgeHelper: 'Pour les mineurs, une autorisation parentale sera demandée.',
  level: 'Niveau',
  levelPlaceholder: 'Choisir un niveau',
  subject: 'Objet de la demande',
  subjectPlaceholder: 'Choisir un objet',
  message: 'Votre message',
  messagePlaceholder: 'Parlez-nous de votre projet équestre…',
  website: 'Site web',
  submitNormal: 'Envoyer ma demande',
  submitSending: 'Envoi…',
  requiredNotice: 'Les champs marqués d\'un * sont obligatoires.',
  successHeading: 'Merci pour votre message',
  successParagraph: 'Nous vous répondrons dans les plus brefs délais.',
  successReset: 'Envoyer un autre message',
  serverErrorFallback: 'Envoi impossible',
  unknownError: 'Une erreur est survenue',
  firstNameShort: 'Prénom trop court',
  lastNameShort: 'Nom trop court',
  emailInvalid: 'Email invalide',
  phoneShort: 'Numéro trop court',
  phoneInvalid: 'Numéro invalide',
};

const enStrings: Strings = {
  ariaLabel: 'Contact form',
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  phone: 'Phone',
  riderAge: "Rider's age",
  riderAgeHelper: 'For minors, parental authorisation will be required.',
  level: 'Level',
  levelPlaceholder: 'Choose a level',
  subject: 'Subject',
  subjectPlaceholder: 'Choose a subject',
  message: 'Your message',
  messagePlaceholder: 'Tell us about your equestrian project…',
  website: 'Website',
  submitNormal: 'Send my request',
  submitSending: 'Sending…',
  requiredNotice: 'Fields marked with * are required.',
  successHeading: 'Thank you for your message',
  successParagraph: 'We will get back to you as soon as possible.',
  successReset: 'Send another message',
  serverErrorFallback: 'Unable to send',
  unknownError: 'An error occurred',
  firstNameShort: 'First name too short',
  lastNameShort: 'Last name too short',
  emailInvalid: 'Invalid email',
  phoneShort: 'Phone number too short',
  phoneInvalid: 'Invalid phone number',
};

// Libellés d'options affichés (EN) mappés vers les valeurs FR envoyées au
// backend. Les valeurs restent en français pour que Pénélope reçoive des
// emails cohérents quelle que soit la langue du formulaire.
const enLevelOptions: ReadonlyArray<{ label: string; value: (typeof niveaux)[number] }> = [
  { label: 'Beginner', value: niveauEnToFr['Beginner'] },
  { label: 'Basic notions', value: niveauEnToFr['Basic notions'] },
  { label: 'Intermediate', value: niveauEnToFr['Intermediate'] },
  { label: 'Advanced', value: niveauEnToFr['Advanced'] },
  { label: 'Not sure', value: niveauEnToFr['Not sure'] },
];

const enSubjectOptions: ReadonlyArray<{ label: string; value: (typeof objets)[number] }> = [
  { label: 'Lessons registration', value: 'Inscription cours' },
  { label: 'Holiday camp', value: 'Stage vacances' },
  { label: 'Private lesson', value: 'Cours particulier' },
  { label: 'General enquiry', value: 'Renseignements' },
  { label: 'Other', value: 'Autre' },
];

// Source de vérité unique côté client : l'URL. On évite useLocale() /
// useTranslations() car le provider next-intl peut rester périmé après
// une navigation client-side dans l'App Router.
function isEnPath(pathname: string): boolean {
  return pathname === '/en' || pathname.startsWith('/en/');
}

export function ContactForm({ defaultObjet }: { defaultObjet?: string }) {
  const pathname = usePathname();
  const isEn = isEnPath(pathname);
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const s: Strings = isEn ? enStrings : frStrings;
  const levelOptions = isEn
    ? enLevelOptions
    : niveaux.map((n) => ({ label: n, value: n }));
  const subjectOptions = isEn
    ? enSubjectOptions
    : objets.map((o) => ({ label: o, value: o }));

  const schema = useMemo(
    () =>
      makeContactSchema({
        firstNameShort: s.firstNameShort,
        lastNameShort: s.lastNameShort,
        emailInvalid: s.emailInvalid,
        phoneShort: s.phoneShort,
        phoneInvalid: s.phoneInvalid,
      }),
    [
      s.firstNameShort,
      s.lastNameShort,
      s.emailInvalid,
      s.phoneShort,
      s.phoneInvalid,
    ]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      message: '',
      website: '',
      objet: (defaultObjet as ContactInput['objet']) ?? undefined,
    },
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus('submitting');
    setServerError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || s.serverErrorFallback);
      }

      setStatus('success');
      reset();
    } catch (e) {
      setStatus('error');
      setServerError(e instanceof Error ? e.message : s.unknownError);
    }
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-lg border border-foret/30 bg-foret/5 p-8 text-center"
      >
        <h3 className="font-serif text-2xl text-foret-dark mb-2">
          {s.successHeading}
        </h3>
        <p className="text-charbon/80 mb-4">{s.successParagraph}</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setStatus('idle')}
        >
          {s.successReset}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      aria-label={s.ariaLabel}
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">{s.website}</label>
        <input
          type="text"
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="prenom" className={labelClass}>
            {s.firstName} <span className="text-bordeaux">*</span>
          </label>
          <input
            id="prenom"
            type="text"
            autoComplete="given-name"
            className={inputClass}
            aria-invalid={!!errors.prenom}
            {...register('prenom')}
          />
          {errors.prenom && (
            <p className={errorClass}>{errors.prenom.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="nom" className={labelClass}>
            {s.lastName} <span className="text-bordeaux">*</span>
          </label>
          <input
            id="nom"
            type="text"
            autoComplete="family-name"
            className={inputClass}
            aria-invalid={!!errors.nom}
            {...register('nom')}
          />
          {errors.nom && <p className={errorClass}>{errors.nom.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            {s.email} <span className="text-bordeaux">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email && (
            <p className={errorClass}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="telephone" className={labelClass}>
            {s.phone} <span className="text-bordeaux">*</span>
          </label>
          <input
            id="telephone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={!!errors.telephone}
            {...register('telephone')}
          />
          {errors.telephone && (
            <p className={errorClass}>{errors.telephone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="age" className={labelClass}>
            {s.riderAge}
          </label>
          <input
            id="age"
            type="number"
            min={3}
            max={110}
            className={inputClass}
            {...register('age')}
          />
          <p className="text-xs text-charbon/60 mt-1">{s.riderAgeHelper}</p>
        </div>

        <div>
          <label htmlFor="niveau" className={labelClass}>
            {s.level}
          </label>
          <select
            id="niveau"
            className={inputClass}
            defaultValue=""
            {...register('niveau')}
          >
            <option value="" disabled>
              {s.levelPlaceholder}
            </option>
            {levelOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="objet" className={labelClass}>
          {s.subject}
        </label>
        <select
          id="objet"
          className={inputClass}
          defaultValue={defaultObjet ?? ''}
          {...register('objet')}
        >
          <option value="" disabled>
            {s.subjectPlaceholder}
          </option>
          {subjectOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {s.message}
        </label>
        <textarea
          id="message"
          rows={6}
          className={inputClass}
          placeholder={s.messagePlaceholder}
          {...register('message')}
        />
      </div>

      {status === 'error' && serverError && (
        <div
          role="alert"
          className="rounded-md border border-bordeaux/30 bg-bordeaux/5 p-4 text-sm text-bordeaux"
        >
          {serverError}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between pt-2">
        <p className="text-xs text-charbon/60">{s.requiredNotice}</p>
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? s.submitSending : s.submitNormal}
        </Button>
      </div>
    </form>
  );
}
