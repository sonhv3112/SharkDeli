import React from 'react';
import { LogBox, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { Login } from './src/screen/Login';
import { Start } from './src/screen/Start';
import { SignUp } from './src/screen/SignUp';
import { Home } from './src/screen/Home';
import Markets from './src/screen/markets/markets';
import Kitchens from './src/screen/kitchens/kitchens';
import ProductDetail from './src/screen/ProductDetail';
import ProductIntro from './src/screen/ProductIntro';
import Orderscreen from './src/screen/Orderscreen';

import StoreProvider from './src/store/StoreProvider';

const Stack = createStackNavigator();

const App = () => { 
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={Start} options={{headerShown: false}} /> 
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> 
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} /> 
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} /> 
          <Stack.Screen name="Kitchens" component={Kitchens} options={{headerShown: false}} /> 
          <Stack.Screen name="Markets" component={Markets} options={{headerShown: false}} /> 
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}} /> 
          <Stack.Screen name="Orderscreen" component={Orderscreen} options={{headerShown: false}} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
});

export default App;
