import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import ResturantCard from '../components/ReaturantCard'



export default function FeaturedRow({ id, title, description }) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text className="text-xs text-grey-500 px-4">{description}</Text>


      <ScrollView 
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="pt-4">
         
        {/* ResturantCard  */}
        <ResturantCard 
          id={123}
          imgurl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description=" This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />

        <ResturantCard 
          id={123}
          imgurl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description=" This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />   


        <ResturantCard 
          id={123}
          imgurl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description=" This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />  

        <ResturantCard 
          id={123}
          imgurl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description=" This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        /> 




        <ResturantCard 
          id={123}
          imgurl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description=" This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        /> 
      </ScrollView>

    </View> 
  )
}