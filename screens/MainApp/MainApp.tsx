import { Text, View, FlatList, SectionList, StyleSheet } from "react-native";
import tw from "../.././lib/tailwind";
import { useFonts } from "expo-font";
import React, { useCallback, useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
// import useMainAppIsReady from "../../hooks/useAppIsReady";
import * as SplashScreen from "expo-splash-screen";
import CameraScreen from "./CameraStack/Camera";
import Home from "./screens/Home/Home";
import Profile from "./screens/Profile";
import Details from "./screens/Details";
import CameraStack from "./CameraStack/CameraStack";
import HomeIcon from "../../assets/icons/home-svgrepo-com (1).svg";
import UserIcon from "../../assets/icons/user-svgrepo-com (1).svg";
import CameraIcon from "../../assets/icons/camera-svgrepo-com.svg";

// SplashScreen.preventAutoHideAsync()

export default function MainApp() {
  const Tab = createBottomTabNavigator();

  // const mainAppIsReady = useMainAppIsReady(data[0].data[0]);

  const mainAppIsReady = true;

  useEffect(() => {
    const prepare = async () => {
      if (mainAppIsReady) {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [mainAppIsReady]);

  const tabBarIconSize = 25;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: false,
      }}
      backBehavior="order"
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <HomeIcon width={tabBarIconSize} height={tabBarIconSize} />
          ),
        }}
        name="Home"
        component={Home}
      />
      {/* <Tab.Screen
        options={{
          tabBarIcon: () => (
            <HomeIcon width={tabBarIconSize} height={tabBarIconSize} />
          ),
        }}
        name="Details"
        component={Details}
      /> */}
      <Tab.Screen
        name="CameraStack"
        component={CameraStack}
        navigationKey="CameraScreen"
        options={{
          tabBarLabel: "Camera",
          lazy: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: () => (
            <CameraIcon width={tabBarIconSize} height={tabBarIconSize} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <UserIcon width={tabBarIconSize} height={tabBarIconSize} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
