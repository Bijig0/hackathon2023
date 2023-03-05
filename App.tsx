import { StatusBar } from "expo-status-bar";
import tw from "./lib/tailwind";
import { Text, View, FlatList, SectionList, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import React, { useCallback, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import MainApp from "./screens/MainApp/MainApp";
import Auth from "./screens/Auth/Auth";

export default function App() {
  const Stack = createNativeStackNavigator<AppParamList>();

  // useEffect(() => {
  //   const prepare = async () => {
  //     if (appIsReady) {
  //       await SplashScreen.hideAsync();
  //     }
  //   };

  //   prepare();
  // }, [appIsReady]);

  const baseAssetsPath = "./assets/fonts";

  const fonts_by_path: { [font in Font]: any } = {
    "DMSans-Regular": require(`${baseAssetsPath}/DMSans-Regular.ttf`),
    "DMSans-Bold": require(`${baseAssetsPath}/DMSans-Bold.ttf`),
    "DMSans-BoldItalic": require(`${baseAssetsPath}/DMSans-BoldItalic.ttf`),
    "DMSans-Medium": require(`${baseAssetsPath}/DMSans-Medium.ttf`),
    "DMSans-MediumItalic": require(`${baseAssetsPath}/DMSans-MediumItalic.ttf`),
    "DMSans-Italic": require(`${baseAssetsPath}/DMSans-Italic.ttf`),
  };
  const [fontsLoaded] = useFonts(fonts_by_path);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <React.StrictMode>
      {/* <AppProvider> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="MainApp"
        >
          <Stack.Screen component={Auth} name="Auth" />
          <Stack.Screen component={MainApp} name="MainApp" />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </AppProvider> */}
    </React.StrictMode>
  );
}
