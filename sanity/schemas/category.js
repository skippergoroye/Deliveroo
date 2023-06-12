export default ({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category name',
      validation: rule=> rule.required(),
   },
   {
      name: 'image',
      type: 'image',
      title: 'image of the restaurant',
   },
  ],
})
