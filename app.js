var path = require('path');

var apos = require('apostrophe')({
  shortName: 'apostrophe-boilerplate',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-forms': {},
    'apostrophe-forms-widgets': {},
    'apostrophe-forms-text-field-widgets': {},
    'apostrophe-forms-file-field-widgets': {},
    'apostrophe-permissions': {
      construct: function (self, options) {
        // Needed if you want file fields to work on public pages
        self.addPublic(['edit-attachment']);
      }
    }
  }
});
