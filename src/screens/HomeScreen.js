import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";
import Categories from "../components/Categories";

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerShown: false,
      }),
    []
  );

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header  */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <Entypo name="chevron-down" size={20} color="#00CCBB" />
          </Text>
        </View>
        <FontAwesome5 name="user" size={35} color="#00CCBB" />
      </View>

      {/* search  */}
      <View className="flex-row items-center space-x-2 pb-3 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2">
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <Entypo name="sound-mix" size={24} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-200" contentContainerStyle={{
        paddingBottom: 100
      }}>
        {/* categoroy */}

        <Categories />

        {/* featured row  */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
