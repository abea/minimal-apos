module.exports = {
  extend: 'apostrophe-pieces',
  name: 'person',
  label: 'Person',
  pluralLabel: 'People',
  addFields: [
    {
      name: '_jawns',
      reverseOf: '_author',
      // idsField: 'creatorIds',
      type: 'joinByArrayReverse',
      withType: 'jawn',
      filters: {
        projection: {
          _url: 1,
          title: 1,
        }
      },
    }
  ]
};
