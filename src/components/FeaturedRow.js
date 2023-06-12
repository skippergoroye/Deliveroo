import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import ResturantCard from '../components/ReaturantCard'
import { client } from '../../sanity';



export default function FeaturedRow({ id, title, description }) {
  const [restaurants, setRetaurants] = useState([])

  useEffect(() => {
    client.fetch(`
    *[_type == "featured" && _id ==$id]{
      ...,
        restaurants[]->{
          ...,
           dishes[]->,
            type->{
              name
            }
          },
        }[0]
      `,{id}). then((data) => {
          setRetaurants(data?.restaurants);
      })
  },[id])


  // console.log(restaurants)

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

        {restaurants?.map((restaurant) => (
          <ResturantCard 
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            short_description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}

      {/*         
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
        /> */}
      </ScrollView>
    </View> 
  )
}