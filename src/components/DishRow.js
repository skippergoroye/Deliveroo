import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from 'react-currency-formatter';
import { urlFor } from '../../sanity';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from 'react'

export default function ({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false)


  return (
    <>
    <TouchableOpacity onPress={() => setIsPressed(!isPressed) } className="bg-white border p-4 border-gray-200">
      <View className ="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">
            <Currency quantity={45685} currency="NGN" />
          </Text>
        </View>

        <View>
          <Image 
          style={{
            borderWidth: 1,
            borderColor: "#F3F3F4"
          }}
          source={{
            uri: urlFor(image).url()
          }} 
          className="h-20 w-20 bg-gray-300 p-4"
          /> 
        </View>
      </View>
    </TouchableOpacity>

    {isPressed && (
      <View>
        <View>
          <TouchableOpacity>
            <AntDesign name="minuscircle" size={24} color="black" />
          </TouchableOpacity>

          <Tex></Text>
        </View>
      </View>
    )}
    </>
  )
}