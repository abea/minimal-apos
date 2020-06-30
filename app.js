var path = require('path');

var apos = require('apostrophe')({
  shortName: 'apostrophe-boilerplate',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    'apostrophe-db': {
      connect: { useUnifiedTopology: true }
    },
    'apostrophe-express': {
      session: { secret: 'scooby' }
    },
    'apostrophe-templates': {
      viewsFolderFallback: path.join(__dirname, 'views')
    },
    'jawns': { extend: 'apostrophe-pieces' },
    'jawns-pages': { extend: 'apostrophe-pieces-pages' },
    'persons': { extend: 'apostrophe-pieces' },
    'persons-pages': { extend: 'apostrophe-pieces-pages' },
    'organizations': { extend: 'apostrophe-pieces' }
  }
});
