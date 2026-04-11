'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
  contactSchema,
  niveaux,
  objets,
  type ContactInput,
} from '@/lib/contact-schema';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full rounded-md border border-sable/60 bg-white px-4 py-3 text-charbon placeholder-charbon/40 focus:border-foret focus:outline-none focus:ring-2 focus:ring-foret/20 transition';
const labelClass =
  'block text-sm font-medium text-foret-dark mb-1.5';
const errorClass = 'text-xs text-bordeaux mt-1';

export function ContactForm({ defaultObjet }: { defaultObjet?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
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
        throw new Error(body.error || 'Envoi impossible');
      }

      setStatus('success');
      reset();
    } catch (e) {
      setStatus('error');
      setServerError(
        e instanceof Error ? e.message : 'Une erreur est survenue'
      );
    }
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-lg border border-foret/30 bg-foret/5 p-8 text-center"
      >
        <h3 className="font-serif text-2xl text-foret-dark mb-2">
          Merci pour votre message
        </h3>
        <p className="text-charbon/80 mb-4">
          Nous vous répondrons dans les plus brefs délais.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setStatus('idle')}
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      aria-label="Formulaire de contact"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Site web</label>
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
            Prénom <span className="text-bordeaux">*</span>
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
            Nom <span className="text-bordeaux">*</span>
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
            Email <span className="text-bordeaux">*</span>
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
            Téléphone <span className="text-bordeaux">*</span>
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
            Âge du cavalier
          </label>
          <input
            id="age"
            type="number"
            min={3}
            max={110}
            className={inputClass}
            {...register('age')}
          />
          <p className="text-xs text-charbon/60 mt-1">
            Pour les mineurs, une autorisation parentale sera demandée.
          </p>
        </div>

        <div>
          <label htmlFor="niveau" className={labelClass}>
            Niveau
          </label>
          <select
            id="niveau"
            className={inputClass}
            defaultValue=""
            {...register('niveau')}
          >
            <option value="" disabled>
              Choisir un niveau
            </option>
            {niveaux.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="objet" className={labelClass}>
          Objet de la demande
        </label>
        <select
          id="objet"
          className={inputClass}
          defaultValue={defaultObjet ?? ''}
          {...register('objet')}
        >
          <option value="" disabled>
            Choisir un objet
          </option>
          {objets.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Votre message
        </label>
        <textarea
          id="message"
          rows={6}
          className={inputClass}
          placeholder="Parlez-nous de votre projet équestre…"
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
        <p className="text-xs text-charbon/60">
          Les champs marqués d&apos;un <span className="text-bordeaux">*</span>{' '}
          sont obligatoires.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Envoi…' : 'Envoyer ma demande'}
        </Button>
      </div>
    </form>
  );
}
