import { View, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import { Entypo, FontAwesome5 } from '@expo/vector-icons'; 



function HomeScreen() {
 
  const navigation = useNavigation()

  useLayoutEffect(() => (
    navigation.setOptions({
      headerShown: false
    })
  ), [])


  return (
    <SafeAreaView className="bg-white pt-5"> 

         {/* Header  */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
         <Image
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
              <Entypo name="chevron-down" size={20} color="#00CCBB" />
            </Text>
          </View>

            <FontAwesome5 name="user" size={35} color="#00CCBB"  />


          
        </View>


        {/* search  */}
        <View>
          <View>
            
        
            <TextInput />

          </View>

        </View>
    </SafeAreaView>
  )
}


export default HomeScreen

