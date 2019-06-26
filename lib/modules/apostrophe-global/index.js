module.exports = {
  addFields: [
    {
      name: 'recaptchaSecret',
      label: 'reCAPTCHA Secret',
      type: 'string'
    },
    {
      name: 'recaptchaSite',
      label: 'reCAPTCHA Site',
      type: 'string'
    }
  ],
  overrideOptions: {
    editable: {
      'apos.apostrophe-forms.recaptchaSite': 'recaptchaSite',
      'apos.apostrophe-forms.recaptchaSecret': 'recaptchaSecret'
    }
  }
};
