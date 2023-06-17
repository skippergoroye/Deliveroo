import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../../sanity";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItemsById } from "../features/basketSlice";

export default function ({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);
  // const { items } = useSelector((state) => state.basket);

  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsById(state, id));


  const handleIncrease = () => {
    dispatch(addToBasket({ id, name, price, image, description }));
  };

  const handleDecrease = () => {
    if(!items.length > 0) return
    dispatch(removeFromBasket({ id })) 
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 
       ${isPressed && "border-b-0"}`}
      >
        <View className="flex-row">
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
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity disabled={!items.length} onPress={handleDecrease}>
              <AntDesign name="minuscircle" size={24} color={items.length > 0 ? "#00CCBB" : "gray"} />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={handleIncrease}>
              <AntDesign name="pluscircle" size={24} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
