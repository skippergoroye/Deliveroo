import { View, Text, Image } from 'react-native'
import React from 'react'


export default function CategoryCard({ imgUrl, title }) {
  return (
    <View className="relative mr-1">
      <Image 
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </View>
  )
}