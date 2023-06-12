import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome, EvilIcons } from '@expo/vector-icons'; 
import { urlFor } from '../../sanity';


export default function ReaturantCard({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
        <Image 
         source={{
            uri: urlFor(imgUrl).url()
         }}
         className="h-36 w-64 rounded-sm"
        />

        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
              <FontAwesome name="star" size={22} color="green" opacity={0.2} />
              <Text className="text-xs text-gray-500">
                <Text>{rating}</Text> .{genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
               <EvilIcons name="location" size={22} color="green" opacity={0.2}  />
                <Text className="text-xs text-gray-500">Nearby .{address} </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}