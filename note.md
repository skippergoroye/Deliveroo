# React Native Quick Guide

To get started with react native you have to install react native gobally on your computer and there are two way of doing you eiher go the [Expo Go] (https://docs.expo.dev/) or [React Native CLI] (https://reactnative.dev/docs/environment-setup?guide=quickstart)


# sudo npm i -g expo-cli


If you are new to mobile development, the easiest way to get started is with Expo Go. Expo is a set of tools and services built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes.


If you are already familiar with mobile development, you may want to use React Native CLI.





# Expo GO Quick start

# NPM
npx create-expo-app AwesomeProject

cd AwesomeProject
npx expo start


# YARN
yarn create expo-app AwesomeProject

cd AwesomeProject
yarn expo start


# React Native CLI Quick start
npx react-native@latest init AwesomeProject







2. Adding TailwindCSS To React Native

# What is NativeWind?
NativeWind uses [Tailwind CSS](https://tailwindcss.com/docs/installation) Babel Guide  [Using Babel](https://tailwindcss.com/docs/installation)   as scripting language to create a universal styling system. Styled components can be shared between all React Native platforms, using the best style engine for that platform; CSS StyleSheet on web and StyleSheet.create for native. It's goals are to provide a consistent styling experience across all platforms, improving Developer UX, component performance and code maintainability.







# Expo

1. Create the project
Create the project with the Expo CLI


npx create-expo-app my-app
cd my-app


You will need to install `<nativewind>` and it's peer dependency `<tailwindcss>`.

npm i nativewind
npm i --dev tailwindcss








2. Setup Tailwind CSS

Run `<npx tailwindcss init>` to create a `<tailwind.config.js>` file

Add the paths to all of your component files in your tailwind.config.js file. Remember to replace <custom directory> with the actual name of your directory e.g. screens.


### tailwind.config.js
module.exports = {
- content: [],
+ content: ["./App.{js,jsx,ts,tsx}", "./<custom directory> src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}









3. Add the Babel plugin

Modify your `<babel.config.js>`


## babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};






Thats it 🎉
Start writing code!

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



















3. React Navigation

# Installation
Install the required packages in your React Native project:

- npm install @react-navigation/native


React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app.

The libraries we will install now are `<react-native-screens>` and `<react-native-safe-area-context>`. If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on.





# Installing dependencies into an Expo managed project
In your project directory, run:


- npx expo install react-native-screens react-native-safe-area-context

This will install versions of these libraries that are compatible. You can now continue to "Hello React Navigation" to start writing some code.







# Wrapping your app in NavigationContainer

Now, we need to wrap the whole app in NavigationContainer. Usually you'd do this in your entry file, such as index.js or App.js:


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}







# Hello React Navigation

React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's native stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack.




# Installing the native stack navigator library
The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install `@react-navigation/native-stack`:


- npm install @react-navigation/native-stack

💡 @react-navigation/native-stack depends on react-native-screens and the other libraries that we installed in Getting started. If you haven't installed those yet, head over to that page and follow the installation instructions.






# Creating a native stack navigator

`<createNativeStackNavigator>` is a function that returns an object containing 2 properties: `<Screen>` Screen and `<Navigator>` Navigator. Both of them are React components used for configuring the navigator. The Navigator should contain Screen elements as its children to define the configuration for routes.

`<NavigationContainer>` is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from App.js.




## In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;









2. Supporting safe areas


import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





## Updating options with setOptions

import { View, Text } from 'react-native'
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








4. SafeAreaView

The purpose of SafeAreaView is to render content within the safe area boundaries of a device.



import { SafeAreaView } from 'react-native-safe-area-context';


<SafeAreaView>
  <Text className="bg-green-500">HomeScreen</Text>
</SafeAreaView>



5. Images

<Image source={require('./img/check.png')} />

<Image
  source={{uri: 'asset:/app_icon.png'}}
  style={{width: 40, height: 40}}
/>

















