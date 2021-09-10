import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import InitialScreen from "./pages/InitialScreen";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import QRCodeReader from "./pages/QRCodeReader";
import MyRequests from "./pages/MyRequests";
import Menu from "./pages/Establishment/Menu";
import Illumination from "./pages/Illumination";
import Restaurants from "./pages/Establishment/Restaurants";
import Categories from "./pages/Establishment/MenuCategory/Categories";
import rateExperience from "./pages/rateExperience";
import Comanda from "./components/pedido/Comanda";
import AcompanharPedido from "./components/pedido/AcompanharPedido";
import BotaoPedido from "./components/pedido/BotaoPedido";
import InfoPedido from "./components/pedido/InfoPedido";
import EditInfoClient from "./pages/Client/EditInfoClient";
import ValidateUser from "./pages/Client/ValidateUser";
import SeeMusic from "./pages/Music/SeeMusic";
import Playlist from "./pages/Music/Playlist";
import SuggestMusic from "./pages/Music/SuggestMusic";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="QRCodeReader" component={QRCodeReader} />
        <Stack.Screen name="MyRequests" component={MyRequests} />
        <Stack.Screen name="Restaurants" component={Restaurants} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Illumination" component={Illumination} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="rateExperience" component={rateExperience} />
        <Stack.Screen name="Comanda" component={Comanda} />
        <Stack.Screen name="AcompanharPedido" component={AcompanharPedido} />
        <Stack.Screen name="InfoPedido" component={InfoPedido} />
        <Stack.Screen name="EditInfoClient" component={EditInfoClient} />
        <Stack.Screen name="ValidateUser" component={ValidateUser} />
        <Stack.Screen name="SeeMusic" component={SeeMusic} />
        <Stack.Screen name="Playlist" component={Playlist} />
        <Stack.Screen name="SuggestMusic" component={SuggestMusic} />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </NavigationContainer>
  );
}
