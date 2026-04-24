import { z } from 'zod';

export const niveaux = [
  'Débutant',
  'Notions de base',
  'Intermédiaire',
  'Confirmé',
  'Je ne sais pas',
] as const;

export const objets = [
  'Inscription cours',
  'Stage vacances',
  'Cours particulier',
  'Renseignements',
  'Autre',
] as const;

// Maps EN niveau labels to their FR backend values (kept in FR so Pénélope
// receives consistent emails regardless of the form's language).
export const niveauEnToFr: Record<string, (typeof niveaux)[number]> = {
  Beginner: 'Débutant',
  'Basic notions': 'Notions de base',
  Intermediate: 'Intermédiaire',
  Advanced: 'Confirmé',
  'Not sure': 'Je ne sais pas',
};

export type ContactErrorMessages = {
  firstNameShort: string;
  lastNameShort: string;
  emailInvalid: string;
  phoneShort: string;
  phoneInvalid: string;
};

const defaultErrorMessages: ContactErrorMessages = {
  firstNameShort: 'Prénom trop court',
  lastNameShort: 'Nom trop court',
  emailInvalid: 'Email invalide',
  phoneShort: 'Numéro trop court',
  phoneInvalid: 'Numéro invalide',
};

export function makeContactSchema(messages: ContactErrorMessages = defaultErrorMessages) {
  return z.object({
    nom: z.string().min(2, messages.lastNameShort).max(80),
    prenom: z.string().min(2, messages.firstNameShort).max(80),
    age: z
      .union([z.coerce.number().int().min(3).max(110), z.literal('')])
      .optional(),
    niveau: z.enum(niveaux).optional(),
    email: z.string().email(messages.emailInvalid),
    telephone: z
      .string()
      .min(8, messages.phoneShort)
      .max(25)
      .regex(/^[+0-9\s().-]+$/, messages.phoneInvalid),
    objet: z.enum(objets).optional(),
    message: z.string().max(2000).optional(),
    // honeypot — should always be empty
    website: z.string().max(0).optional().or(z.literal('')),
  });
}

export const contactSchema = makeContactSchema();

export type ContactInput = z.infer<typeof contactSchema>;
