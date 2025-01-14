const mfa = {
  totp: 'Eenmalig wachtwoord van authenticator-app',
  webauthn: 'Beveiligingssleutel',
  backup_code: 'Back-upcode',
  link_totp_description: 'Zoals Google Authenticator, etc.',
  link_webauthn_description: 'Koppel je apparaat of hardwaresleutel',
  link_backup_code_description: 'Genereer een back-upcode',
  verify_totp_description: 'Voer het eenmalige wachtwoord in',
  verify_webauthn_description: 'Verifieer je apparaat of hardwaresleutel',
  verify_backup_code_description: 'Plak de opgeslagen back-upcode',
  add_mfa_factors: 'Voeg tweestapsverificatie toe',
  add_mfa_description:
    'Tweefactorverificatie is ingeschakeld. Selecteer de tweede verificatiemethode om in te loggen.',
  verify_mfa_factors: 'tweestapsverificatie',
  verify_mfa_description:
    'Tweestapsverificatie is ingeschakeld voor dit account. Selecteer de tweede manier om je identiteit te verifiëren.',
  add_authenticator_app: 'Voeg authenticator-app toe',
  step: 'Stap {{step, number}}: {{content}}',
  scan_qr_code: 'Scan de QR-code',
  scan_qr_code_description:
    'Scan de QR-code met je authenticator-app, zoals Google Authenticator, Duo Mobile of Authy.',
  qr_code_not_available: 'Lukt het scannen niet?',
  copy_and_paste_key: 'Kopiëer en plak de sleutel',
  copy_and_paste_key_description:
    'Kopiëer en plak de onderstaande sleutel in je authenticator-app, zoals Google Authenticator, Duo Mobile of Authy.',
  want_to_scan_qr_code: 'Wil je de QR-code scannen?',
  enter_one_time_code: 'Voer het eenmalige wachtwoord in',
  enter_one_time_code_link_description:
    'Voer de 6-cijferige verificatiecode gegenereerd door je authenticator-app in.',
  enter_one_time_code_description:
    'Tweestapsverificatie is ingeschakeld voor dit account. Voer het eenmalige wachtwoord gegenereerd door je authenticator-app in.',
  link_another_mfa_factor: 'Verander van methode',
  save_backup_code: 'Sla je back-upcode op',
  save_backup_code_description:
    'Je kunt een van deze back-upcodes gebruiken om toegang te krijgen tot je account als je problemen hebt met je tweestapsverificatie. Elke code kan slechts één keer worden gebruikt.',
  backup_code_hint: 'Zorg ervoor dat je ze kopieert en op een veilige plaats opslaat.',
  enter_a_backup_code: 'Voer een back-upcode in',
  enter_backup_code_description:
    'Voer de back-upcode in die je hebt opgeslagen toen je tweestapsverificatie hebt ingeschakeld.',
  create_a_passkey: 'Maak een beveiligingssleutel aan',
  create_passkey_description:
    'Register your passkey using device biometrics, security keys (e.g., YubiKey), or other available methods.',
  try_another_verification_method: 'Try another method to verify',
  verify_via_passkey: 'Verify via passkey',
  verify_via_passkey_description:
    'Gebruik een beveiligingsleutel om te verifiëren met je apparaatwachtwoord of biometrie, door een QR-code te scannen of een USB-beveiligingssleutel zoals YubiKey te gebruiken.',
  secret_key_copied: 'Geheime sleutel gekopieerd',
  backup_code_copied: 'Back-upcode gekopieerd',
  webauthn_not_ready: 'WebAuthn is nog niet gereed. Probeer het later opnieuw.',
  webauthn_not_supported: 'WebAuthn wordt niet door deze browser ondersteund.',
  webauthn_failed_to_create: 'Kon niet aanmaken. Probeer het opnieuw.',
  webauthn_failed_to_verify: 'Kon niet verifiëren. Probeer het opnieuw.',
};

export default Object.freeze(mfa);
