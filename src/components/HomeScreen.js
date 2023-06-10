import { View, Text } from 'react-native'
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
        <Text className="bg-green-500">HomeScreen</Text>
     </SafeAreaView>

    
  )
}