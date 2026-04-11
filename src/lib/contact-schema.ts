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

export const contactSchema = z.object({
  nom: z.string().min(2, 'Nom trop court').max(80),
  prenom: z.string().min(2, 'Prénom trop court').max(80),
  age: z
    .union([z.coerce.number().int().min(3).max(110), z.literal('')])
    .optional(),
  niveau: z.enum(niveaux).optional(),
  email: z.string().email('Email invalide'),
  telephone: z
    .string()
    .min(8, 'Numéro trop court')
    .max(25)
    .regex(/^[+0-9\s().-]+$/, 'Numéro invalide'),
  objet: z.enum(objets).optional(),
  message: z.string().max(2000).optional(),
  // honeypot — should always be empty
  website: z.string().max(0).optional().or(z.literal('')),
});

export type ContactInput = z.infer<typeof contactSchema>;
