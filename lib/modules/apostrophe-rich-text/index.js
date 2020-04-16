module.exports = {
  sanitizeHtml: {
    allowedAttributes: {
      '*': [ 'style', 'class' ],
      'a': [ 'href', 'target', 'class' ]
    },
    allowedTags: [
      'h1', 'h2', 'h3', 'p',
      'strong', 'em', 'a',
      'ul', 'li', 'ol', 'br'
    ]
  }
};
