module.exports = {
  name: 'jawn',
  extend: 'apostrophe-pieces',
  label: 'Jawn',
  pluralLabel: 'Jawns',
  addFields: [
    {
      label: 'Creator',
      help: 'Person or collective who created the jawn.',
      name: '_author',
      idsField: 'creatorIds',
      type: 'joinByArray',
      withType: [
        'person',
        'organization'
      ],
      filters: {
        projection: {
          _url: 1,
          title: 1,
        }
      },
      required: true
    }
  ]
};