import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import InitialScreen from './pages/InitialScreen';
import SignIn from './pages/Login/SignIn';
import SignUp from './pages/Login/SignUp';
import QRCodeReader from './pages/QRCodeReader';
import MyRequests from './pages/MyRequests';
import Menu from './pages/Establishment/Menu';
import Illumination from './pages/Illumination';
import Restaurants from './pages/Establishment/Restaurants';
import Categories from './pages/Establishment/MenuCategory/Categories';
import rateExperience from './pages/rateExperience'
const Stack = createNativeStackNavigator();

export default function App() {
return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen 
          name="InitialScreen"
          component={InitialScreen}          
        />
        <Stack.Screen 
          name="SignIn"
          component={SignIn}          
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen 
          name="QRCodeReader"
          component={QRCodeReader}
        />
        <Stack.Screen 
          name="MyRequests"
          component={MyRequests}
        />
        <Stack.Screen 
          name="Restaurants"
          component={Restaurants}
        />
        <Stack.Screen 
          name="Menu"
          component={Menu}
        />
        <Stack.Screen 
          name="Illumination"
          component={Illumination}
        />
        <Stack.Screen 
          name="Categories"
          component={Categories}
        />
        <Stack.Screen 
          name="rateExperience"
          component={rateExperience}
        />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"  />
    </NavigationContainer>
  );
}
