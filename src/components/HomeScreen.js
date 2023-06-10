import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => (
    navigation.setOptions({
      headerShown: false
    })
  ), [])
  return (
    <SafeAreaView>
        <View>
         <Image
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            
          />
        </View>
    </SafeAreaView>
  )
}