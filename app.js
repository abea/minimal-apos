const path = require('path');

const formContentWidgets = {
  'apostrophe-forms-text-field': {},
  'apostrophe-forms-textarea-field': {},
  'apostrophe-forms-file-field': {},
  'apostrophe-forms-boolean-field': {},
  'apostrophe-forms-select-field': {},
  'apostrophe-forms-radio-field': {},
  'apostrophe-forms-checkboxes-field': {},
  'apostrophe-forms-conditional': {},
  'apostrophe-forms-file-field': {},
  'apostrophe-rich-text': {
    toolbar: [
      'Styles', 'Bold', 'Italic', 'Link', 'Anchor', 'Unlink',
      'NumberedList', 'BulletedList'
    ]
  }
};

const apos = require('apostrophe')({
  shortName: 'apos-staging',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    'apostrophe-forms': {
      formWidgets: {
        ...formContentWidgets,
        'form-columns': {}
      }
    },
    'form-columns-widgets': {
      formContentWidgets: formContentWidgets
    },
    'apostrophe-forms-submit-google': {},
    'apostrophe-forms-widgets': {
      // disableBaseStyles: true
    },
    // Form field widgets
    'apostrophe-forms-text-field-widgets': {},
    'apostrophe-forms-textarea-field-widgets': {},
    'apostrophe-forms-select-field-widgets': {},
    'apostrophe-forms-radio-field-widgets': {},
    'apostrophe-forms-checkboxes-field-widgets': {},
    'apostrophe-forms-file-field-widgets': {},
    'apostrophe-forms-boolean-field-widgets': {},
    'apostrophe-forms-conditional-widgets': {},

    'apostrophe-permissions': {
      construct: function (self, options) {
        // Needed if you want file fields to work on public pages
        self.addPublic(['edit-attachment']);
      }
    },
    'apostrophe-email': {
      // See the nodemailer documentation, many
      // different transports are available, this one
      // matches how PHP does it on Linux servers
      nodemailer: {
        sendmail: true,
        newline: 'unix',
        path: '/usr/sbin/sendmail'
      }
    },

    'apostrophe-override-options': {}
  }
});
