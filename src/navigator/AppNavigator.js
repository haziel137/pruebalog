import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import inicia from "../componentes/inicia";
import Prueba from "../componentes/prueba";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={inicia} options={{ headerShown: false }} />
        <Stack.Screen name="Prueba" component={Prueba} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
