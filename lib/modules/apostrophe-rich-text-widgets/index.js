module.exports = {
  sanitizeHtml: {
    allowedAttributes: {
      'h2': [ 'style' ],
      'h3': [ 'style' ],
      'p': [ 'style' ],
      'a': [ 'href', 'target', 'class' ]
    },
    allowedTags: [
      'h1', 'h2', 'h3', 'p',
      'strong', 'em', 'a',
      'ul', 'li', 'ol', 'br'
    ]
  },
  construct: function (self, options) {
    console.log(options);
  }
};
