export default  ({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Dish name',
        validation: rule=> rule.required(),
    },
    {
        name: 'short_description',
        type: 'string',
        title: 'short description',
        validation: rule=> rule.max(200),
    },
    {
      name: 'image', 
      type: 'image',
      title: 'Image of the dish'
    },
    {
      name: 'price',
      title: 'Price of the dish in USD',
      type: 'number'
    }
  ]
})
