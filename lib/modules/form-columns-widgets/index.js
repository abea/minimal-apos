module.exports = {
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
  ]
};
