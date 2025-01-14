import password_rejected from './password-rejected.js';

const error = {
  general_required: `{{types, list(type: disjunction;)}} is verplicht`,
  general_invalid: `The {{types, list(type: disjunction;)}} is ongeldig`,
  username_required: 'Gebruikersnaam is verplicht',
  password_required: 'Wachtwoord is verplicht',
  username_exists: 'Gebruikersnaam bestaat al',
  username_should_not_start_with_number: 'Gebruikersnaam mag niet met een cijfer beginnen',
  username_invalid_charset: 'Gebruikersnaam mag alleen letter, cijfers of lage streepjes bevatten.',
  invalid_email: 'Het e-mailadres is ongeldig',
  invalid_phone: 'Het telefoonnummer is ongeldig',
  passwords_do_not_match: 'Je wachtwoorden komen niet overeen. Probeer het opnieuw.',
  invalid_passcode: 'De verificatiecode is ongeldig.',
  invalid_connector_auth: 'De autorisatie is ongeldig',
  invalid_connector_request: 'De verbindingsdata is ongeldig',
  unknown: 'Onbekende fout. Probeer het later opnieuw.',
  invalid_session: 'Sessie niet gevonden. Ga terug en meld je opnieuw aan.',
  timeout: 'Aanvraag verlopen. Probeer het later opnieuw.',
  password_rejected,
  sso_not_enabled: 'Single Sign-On is niet ingeschakeld voor dit e-mailadres.',
};

export default Object.freeze(error);
