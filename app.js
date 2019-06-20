var path = require('path');

var apos = require('apostrophe')({
  shortName: 'apostrophe-boilerplate',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-forms': {
      // emailSubmissions: false
    },
    'apostrophe-forms-widgets': {},
    'apostrophe-forms-text-field-widgets': {},
    'apostrophe-forms-textarea-field-widgets': {},
    'apostrophe-forms-select-field-widgets': {},
    'apostrophe-forms-radio-field-widgets': {},
    'apostrophe-forms-checkboxes-field-widgets': {},
    'apostrophe-forms-file-field-widgets': {},
    // 'apostrophe-forms-params-field-widgets': {},
    // 'apostrophe-forms-boolean-field-widgets': {},
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
    }
  }
});
