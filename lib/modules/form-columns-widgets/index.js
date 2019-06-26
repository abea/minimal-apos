module.exports = {
  alias: 'formColumns',
  extend: 'apostrophe-widgets',
  label: 'Form Columns',
  contextualOnly: true,
  addFields: [
    {
      name: 'left',
      type: 'area',
      contextual: true
    },
    {
      name: 'right',
      type: 'area',
      contextual: true
    }
  ],
  construct: function (self, options) {
    self.addHelpers({
      formArea: options.formContentWidgets
    });
  }
};
