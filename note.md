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














## Supporting safe areas


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















6. Add ICONS to React Native Project

To add icons in a react native project we use `<@expo/vector-icons>` react-native-vector-icons and uses a similar API. It includes popular icon sets that you can browse at `<icons.expo.fyi>`.


# Installation
npx expo install @expo/vector-icons


# Usage 
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons'; 


export default function App() {
  return (
    <View style={styles.container}>
      <Entypo name="chevron-down" size={24} color="black" />
      <FontAwesome5 name="facebook-f" size={24} color="black" />
      <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={loginWithFacebook}>
        Login with Facebook
      </FontAwesome.Button>
    </View>
  );
}

const styles = StyleSheet.create({ ... }); 










7. Handling Text Input

`<TextInput>`is a [Core Component](https://reactnative.dev/docs/next/textinput)   that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.


import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');


  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        value={text}
        value={number}
        keyboardType="numeric"
        keyboardType="default"
      />
    </View>
  );
};

export default PizzaTranslator;















8. ScrollView
ScrollView is a core component in React Native that provides a scrollable view for rendering a list of items or content that exceeds the available screen space. It allows users to scroll vertically or horizontally to view the content that extends beyond the visible area.



`<ScrollView>` vs `<FlatList>` - which one to use?

ScrollView renders all its react child components at once, but this has a performance downside.

Imagine you have a very long list of items you want to display, maybe several screens worth of content. Creating JS components and native views for everything all at once, much of which may not even be shown, will contribute to slow rendering and increased memory usage.

This is where FlatList comes into play. `<FlatList>` renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.

`<FlatList>` is also handy if you want to render separators between your items, multiple columns, infinite scroll loading, or any number of other features it supports out of the box.



# contentContainerStyle
These styles will be applied to the scroll view content container which wraps all of the child views. it is used in styling a scroolview 

Example:
<ScrollView className="bg-gray-200" contentContainerStyle={{
   paddingBottom: 100
   paddingHorizontal: 15
   paddingTop: 10
}}>




# horizontal
When true, the scroll view's children are arranged horizontally in a row instead of vertically in a column.

# showsHorizontalScrollIndicator
When true, shows a horizontal scroll indicator.















9. Sanity.io
Sanity is a platform for creating and working with structured content. Your content is stored in the cloud and can be distributed anywhere, for example on a website or in an app.



# Create a Sanity project for backend using  [ClI](https://www.sanity.io/docs/getting-started-with-sanity-cli)
npm install -g @sanity/cli
sanity init
- Blog schema



# Create a Sanity project 
npm create sanity@latest -- --create-project "Project Name(Sanity)" --dataset production
cd sanity
npm run start
http://localhost:3333/desk







# Add following dependency to the client
npm install @sanity/client
npm install @sanity/image-url

Then create a sanity.js file 





1. @sanity/client
- Install the client with a package manager:
npm install @sanity/client


- Import and create a new client instance, and use its methods to interact with your project's Content Lake. Below are some simple examples in plain JavaScript. Read further for more comprehensive documentation.

// sanity.js
import {createClient} from '@sanity/client'


export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})




2. @sanity/image-url
Quickly generate image urls from Sanity image records.
This helper will by default respect any crops/hotspots specified in the Sanity content provided to it. 



# Getting started
npm install @sanity/image-url




# usage 
The most common way to use this library in your project is to configure it by passing it your configured [@sanity/image-url](https://www.sanity.io/docs/image-url). That way it will automatically be preconfigured to your current project and dataset:



import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(myConfiguredSanityClient)

ES5
function urlFor(source) {
  return builder.image(source)
}

ES6

export const urlFor = (source) => builder.image(source)



# Add to CORS ORIGIN FROM TERMINAL/SANITY.io
Run the foolowinf to add exceptionto localhost 3000 and 19006 CORS policy
cd sanity

sanity cors http://localhost:3000   mobile
sanity cors http://localhost:19006  web



















