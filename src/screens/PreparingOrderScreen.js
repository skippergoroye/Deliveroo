import { View, Text, SafeAreaView, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';

import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PreparingOrderScreen() {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000 )
  }, [])



  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../../assets/images/delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-80"
      />


      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-80"
      >
        Waiting for Restaurant to accept your order
      </Animatable.Text>


      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
}
