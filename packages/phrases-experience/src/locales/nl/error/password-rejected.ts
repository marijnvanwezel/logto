import { type PasswordRejectionCode } from '@logto/core-kit';

type BreakdownKeysToObject<Key extends string> = {
  [K in Key as K extends `${infer A}.${string}` ? A : K]: K extends `${string}.${infer B}`
    ? BreakdownKeysToObject<B>
    : string;
};

type RejectionPhrases = BreakdownKeysToObject<PasswordRejectionCode>;

const password_rejected = {
  too_short: 'Minimale lengte is {{min}}.',
  too_long: 'Maximale lengte is {{max}}.',
  character_types: 'Tenminste {{min}} verschillende typen karakters zijn vereist.',
  unsupported_characters: 'Niet-ondersteund teken gevonden.',
  pwned: 'Gebruik geen wachtwoorden die makkelijk te raden zijn.',
  restricted_found: 'Gebruik niet te veel van {{list, list}}.',
  restricted: {
    repetition: 'herhaalde tekens',
    sequence: 'sequentiële tekens',
    user_info: 'je persoonlijke informatie',
    words: 'productcontext',
  },
} satisfies RejectionPhrases & {
  // Use for displaying a list of restricted issues
  restricted_found: string;
};

export default Object.freeze(password_rejected);
