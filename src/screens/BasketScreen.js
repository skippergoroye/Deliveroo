import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch} from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'
import { urlFor } from '../../sanity';
import Currency from "react-currency-formatter";

export default function BasketScreen() {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const items = useSelector(selectBasketItems)
  const restaurant = useSelector(selectRestaurant)
  const basketTotal = useSelector(selectBasketTotal)

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])


  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results
    }, {});
    setGroupedItemsInBasket(groupItems)
  }, [items])
  

 
  return (

    // <View className=" bg-white flex-1">
    // {/* top button */}
    // <View className="relative py-4 shadow-sm">
    //   <TouchableOpacity 
    //       // style={{backgroundColor: themeColors.bgColor(1)}} 
    //       onPress={navigation.goBack} 
    //       className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
    //       <AntDesign name="closecircle" size={24} color="black" />
    //   </TouchableOpacity>
    //   <View>
    //       <Text className="text-center font-bold text-xl">Your cart</Text>
    //       <Text className="text-center text-gray-500">{restaurant.title}</Text>
    //   </View>
      
    // </View>
    // </View>



    <SafeAreaView className="flex-1 bg-white mt-10">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
             <Text className="text-lg font-bold text-center">Basket</Text>
             <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>


          <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-8 right-5">
              <AntDesign name="closecircle" size={30} color="#00CCBB" />
          </TouchableOpacity>
        </View>


        <View className="flex-row items-center space-x-4 py-3 px-4 my-5 bg-white">
          <Image source={{
            uri: "https://links.papareact.com/wru",
          }} 
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>


        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View 
               key={key}
               className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className='text-[#00CCBB]'>{items.length} x</Text>
              <Image 
                source={{
                  uri: urlFor(items[0]?.image).url() }}
                  className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>

              <Text className="text-gray">
                <Currency quantity={items[0]?.price} currency="NGN" />
              </Text>


              <TouchableOpacity>
                <Text className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                 </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>


        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="NGN" />
            </Text>
          </View>


          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="NGN" />
            </Text>
          </View>


          <View className="flex-row justify-between">
            <Text className="font-bold">Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="NGN" />
            </Text>
          </View>


          <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')} className="rounded-lg bg-[#00CCBB] p-4">
            <Text className="text-center text-white font-bold">Place your order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}