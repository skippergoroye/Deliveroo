import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'


export default function Categories() {
  return (
    <ScrollView 
      contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10
      }} 
      horizontal 
      showsHorizontalScrollIndicator={false}>
      

        {/* categorycard  */}

        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 1"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 2"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 3"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 4"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 5"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 6"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 7"/>
        <CategoryCard imgurl="https://links.papareact.com/gn7" title="Testing 8"/>
    </ScrollView>
  )
}