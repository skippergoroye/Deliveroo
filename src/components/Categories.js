import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { client, urlFor } from '../../sanity'


export default function Categories() {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    client.fetch(`
     *[_type == "category"]
    `).then((data) => {
      setCategories(data)
    })
  }, [])

  // console.log(categories)
  return (
    <ScrollView 
      contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10
      }} 
      horizontal 
      showsHorizontalScrollIndicator={false}>
      

        {/* categorycard  */}
        {categories.map((category) => (
          <CategoryCard 
            key={category._id}
            imgUrl={urlFor(category.image).width(200).url()} 
            title={category.name}
          />
        ))}

        {/* <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 1"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 2"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 3"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 4"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 5"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 6"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 7"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 8"/> */}
    </ScrollView>
  )
}