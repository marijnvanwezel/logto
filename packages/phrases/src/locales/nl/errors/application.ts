const application = {
  invalid_type: 'Alleen machine-tot-machine-toepassingen kunnen gekoppelde rollen hebben.',
  role_exists: 'De rol-id {{roleId}} is al toegevoegd aan deze applicatie.',
  invalid_role_type: 'Kan geen gebruikersrol toewijzen aan een machine-naar-machine-applicatie.',
  invalid_third_party_application_type:
    'Alleen traditionele webapplicaties kunnen als third-party app worden gemarkeerd.',
  third_party_application_only: 'Deze functie is alleen beschikbaar voor third-party apps.',
  user_consent_scopes_not_found: 'Ongeldige user consent scopes.',
  consent_management_api_scopes_not_allowed: 'Management API-scopes zijn niet toegestaan.',
  protected_app_metadata_is_required: 'Beveiligde app-metagegevens zijn vereist.',
  protected_app_not_configured:
    'Beveiligde app-provider is niet geconfigureerd. Deze functie is niet beschikbaar voor de open source-versie.',
  cloudflare_unknown_error: 'Er is een onbekende fout opgetreden bij het aanvragen van de Cloudflare API',
  protected_application_only: 'Deze functie is alleen beschikbaar voor beveiligde applicaties.',
  protected_application_misconfigured: 'Beveiligde applicatie is incorrect geconfigureerd.',
  protected_application_subdomain_exists:
    'Het subdomein van de Beveiligde applicatie is al in gebruik.',
  invalid_subdomain: 'Ongeldig subdomein.',
  custom_domain_not_found: 'Aangepast domein niet gevonden.',
  should_delete_custom_domains_first: 'Aangepaste domeinen moeten eerst worden verwijderd.',
  no_legacy_secret_found: 'De applicatie heeft geen legacy secret.',
  secret_name_exists: 'Naam voor geheim bestaat al.',
  saml: {
    use_saml_app_api: 'Gebruik `[METHOD] /saml-applications(/.*)?` API om de SAML-app te gebruiken.',
    saml_application_only: 'De API is alleen beschikbaar voor SAML-applicaties.',
    acs_url_binding_not_supported:
      'Alleen HTTP-POST-binding wordt ondersteund voor het ontvangen van SAML-asserties.',
    can_not_delete_active_secret: 'Het actieve geheim kan niet worden verwijderd.',
    no_active_secret: 'Geen actief geheim gevonden.',
    entity_id_required: 'Entiteits-ID is vereist om metagegevens te genereren.',
    name_id_format_required: 'Naam-ID-indeling is vereist.',
    unsupported_name_id_format: 'Naam-ID-indeling wordt niet ondersteund.',
    missing_email_address: 'Gebruiker heeft geen e-mailadres.',
    email_address_unverified: 'Het e-mailadres van de gebruiker is niet geverifieerd.',
    invalid_certificate_pem_format: 'Ongeldig formaat voor PEM-certificaat',
    acs_url_required: 'URL voor Assertion Consumer Service is vereist.',
    private_key_required: 'Privésleutel is vereist.',
    certificate_required: 'Certificaat is vereist.',
    invalid_saml_request: 'Ongeldige SAML-authenticatieaanvraag.',
    auth_request_issuer_not_match:
      'De uitgever van het SAML-authenticatieverzoek komt niet overeen met de entiteits-ID van de serviceprovider.',
    sp_initiated_saml_sso_session_not_found_in_cookies:
      'Door serviceprovider geïnitieerde SAML SSO-sessie-ID niet gevonden in cookies.',
    sp_initiated_saml_sso_session_not_found:
      'Door serviceprovider geïnitieerde SAML SSO-sessie niet gevonden.',
    state_mismatch: '`state` komt niet overeen.',
  },
};

export default Object.freeze(application);
