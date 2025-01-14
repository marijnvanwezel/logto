const auth = {
  authorization_header_missing: 'Autorisatieheader ontbreekt.',
  authorization_token_type_not_supported: 'Autorisatietype wordt niet ondersteund.',
  unauthorized: 'Ongeautoriseerd. Controleer de inloggegevens en hun scope.',
  forbidden: 'Verboden. Controleer uw gebruikersrollen en rechten.',
  expected_role_not_found: 'Verwachte rol niet gevonden. Controleer uw gebruikersrollen en rechten.',
  jwt_sub_missing: 'Ontbrekende `sub` in JWT.',
  require_re_authentication: 'Om een beveiligde actie uit te voeren, is her-authenticatie vereist.',
  exceed_token_limit: 'Tokenlimiet overschreden. Neem contact op met uw beheerder.',
};

export default Object.freeze(auth);
