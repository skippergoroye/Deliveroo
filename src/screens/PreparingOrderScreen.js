import { View, Text, SafeAreaView, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';



import React from 'react'

export default function PreparingOrderScreen () {
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image source={require('../../assets/images/delivery.gif')}  animation="slideInUp" iterationCount={1} className="h-80 w-80" />
    </SafeAreaView>
  )
}