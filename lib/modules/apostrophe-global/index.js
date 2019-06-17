module.exports = {
  addFields: [
    {
      name: 'recaptchaSecret',
      label: 'recaptcha Secret',
      type: 'string'
    },
    {
      name: 'recaptchaSite',
      label: 'recaptcha Site',
      type: 'string'
    }
  ],
  overrideOptions: {
    editable: {
      // `analyticsEventId` should be a schema field as seen above
      'apos.apostrophe-forms.recaptchaSite': 'recaptchaSite',
      'apos.apostrophe-forms.recaptchaSecret': 'recaptchaSecret'
    }
  }
};
