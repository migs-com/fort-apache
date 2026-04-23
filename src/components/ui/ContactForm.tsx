'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
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

type FrStrings = {
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

const frStrings: FrStrings = {
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

export function ContactForm({ defaultObjet }: { defaultObjet?: string }) {
  const locale = useLocale();
  const isEn = locale === 'en';
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const tLabels = useTranslations('Contact.Form.Labels');
  const tPlaceholders = useTranslations('Contact.Form.Placeholders');
  const tErrors = useTranslations('Contact.Form.Errors');
  const tLevel = useTranslations('Contact.Form.LevelOptions');
  const tSubject = useTranslations('Contact.Form.SubjectOptions');
  const tButtons = useTranslations('Contact.Form.Buttons');
  const tSuccess = useTranslations('Contact.Form.SuccessScreen');
  const tForm = useTranslations('Contact.Form');

  const s: FrStrings = isEn
    ? {
        ariaLabel: tForm('ariaLabel'),
        firstName: tLabels('firstName'),
        lastName: tLabels('lastName'),
        email: tLabels('email'),
        phone: tLabels('phone'),
        riderAge: tLabels('riderAge'),
        riderAgeHelper: tLabels('riderAgeHelper'),
        level: tLabels('level'),
        levelPlaceholder: tPlaceholders('level'),
        subject: tLabels('subject'),
        subjectPlaceholder: tPlaceholders('subject'),
        message: tLabels('message'),
        messagePlaceholder: tPlaceholders('message'),
        website: tLabels('website'),
        submitNormal: tButtons('submitNormal'),
        submitSending: tButtons('submitSending'),
        requiredNotice: tButtons('requiredNotice'),
        successHeading: tSuccess('heading'),
        successParagraph: tSuccess('paragraph'),
        successReset: tSuccess('resetButton'),
        serverErrorFallback: tErrors('serverError'),
        unknownError: tErrors('unknownError'),
        firstNameShort: tErrors('firstNameShort'),
        lastNameShort: tErrors('lastNameShort'),
        emailInvalid: tErrors('emailInvalid'),
        phoneShort: tErrors('phoneShort'),
        phoneInvalid: tErrors('phoneInvalid'),
      }
    : frStrings;

  // Level options — display label (locale) → FR value (backend)
  const levelOptions = isEn
    ? [
        { label: tLevel('beginner'), value: niveauEnToFr['Beginner'] },
        { label: tLevel('basic'), value: niveauEnToFr['Basic notions'] },
        { label: tLevel('intermediate'), value: niveauEnToFr['Intermediate'] },
        { label: tLevel('advanced'), value: niveauEnToFr['Advanced'] },
        { label: tLevel('unsure'), value: niveauEnToFr['Not sure'] },
      ]
    : niveaux.map((n) => ({ label: n, value: n }));

  // Subject options — display label (locale) → FR value (backend)
  const subjectOptions = isEn
    ? [
        { label: tSubject('lessonsRegistration'), value: 'Inscription cours' },
        { label: tSubject('holidayCamp'), value: 'Stage vacances' },
        { label: tSubject('privateLesson'), value: 'Cours particulier' },
        { label: tSubject('generalEnquiry'), value: 'Renseignements' },
        { label: tSubject('other'), value: 'Autre' },
      ]
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
