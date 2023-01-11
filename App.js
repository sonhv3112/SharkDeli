import React, { useEffect } from 'react';
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
import ProductDetail from './src/screen/order/ProductDetail';
import ProductIntro from './src/screen/order/ProductIntro';
import Orderscreen from './src/screen/order/Orderscreen';
import Chat from './src/screen/Chat';
import BoomDealReport from './src/screen/reports/BoomDealReport';
import StoreReport from './src/screen/reports/StoreReport';
import BoomDealDetail from './src/screen/rescue/BoomDealDetail';
import BoomDealIntro from './src/screen/rescue/BoomDealIntro';
import HotDeal from './src/screen/HotDeal';
import PayScreen from './src/screen/order/PayScreen';
import MyOrder from './src/screen/MyOrder';
import Comment from './src/screen/coin-comment/Comment'; 
import DeliveryDetail from './src/screen/coin-comment/DeliveryDetail';
import DeliveryInfo from './src/screen/coin-comment/DeliveryInfo';
import OrderConfirmation from './src/screen/OrderConfirmation'; 
import Shop from './src/screen/shop/shop';
import Statistical from './src/screen/statistical';
import Profile from './src/screen/profiles/Profile';
import DetailShipper from './src/screen/DetailShipper';
import ImageFood from './src/screen/ImageFood';

import StoreProvider from './src/store/StoreProvider';

import { storeData, getData, removeData } from './src/storage/localStorage';

const Stack = createStackNavigator();

const App = () => { 
  // useEffect(() => { 
  //   const fetchData = async () => { 
  //     await storeData('123', {hold: '123', hest: '111'}); 
  //     const item = await getData('123'); 
  //     console.log('item: ' + item.hest); 
  //   }

  //   fetchData(); 
  // }, []);

  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Start" component={Start} options={{headerShown: false}} /> 
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> 
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />   */}
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} /> 
          <Stack.Screen name="HotDeal" component={HotDeal} options={{headerShown: false}} />  
          <Stack.Screen name="Kitchens" component={Kitchens} options={{headerShown: false}} />
          <Stack.Screen name="Markets" component={Markets} options={{headerShown: false}} />  
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}} /> 
          <Stack.Screen name="Orderscreen" component={Orderscreen} options={{headerShown: false}} /> 
          <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}} />   
          <Stack.Screen name="BoomDealReport" component={BoomDealReport} options={{headerShown: false}} /> 
          <Stack.Screen name="StoreReport" component={StoreReport} options={{headerShown: false}} /> 
          <Stack.Screen name="BoomDealIntro" component={BoomDealIntro} options={{headerShown: false}} />  
          <Stack.Screen name="BoomDealDetail" component={BoomDealDetail} options={{headerShown: false}} />
          <Stack.Screen name="PayScreen" component={PayScreen} options={{headerShown: false}} /> 
          <Stack.Screen name="MyOrder" component={MyOrder} options={{headerShown: false}} /> 
          <Stack.Screen name="Comment" component={Comment} options={{headerShown: false}} />
          <Stack.Screen name="DeliveryDetail" component={DeliveryDetail} options={{headerShown: false}} /> 
          <Stack.Screen name="ImageFood" component={ImageFood} options={{headerShown: false}} /> 
          <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} options={{headerShown: false}} 
            initialParams={{item:{ isShipper: false, id: '#37462', ReceivingAddress: '252 Nguyễn Văn Cừ, q5, TP Hồ Chí Minh', shop: 'Bún nước cô có, 25 Phan Đình Phùn, Phú Nhuận', orders: [
            {
              name: 'Tré trộn đặc biệt',
              amount: 1,
              note: 'ít cay',
              ingredients: [{name: 'Chả cá', amount: 1}, {name: 'Trứng thêm', amount: 1}],
            },
            {
              name: 'Trà dâu',
              amount: 2,
              note: 'ít đá',
              ingredients: [],
            },
            ] }}}/>  
          <Stack.Screen name="Shop" component={Shop} options={{headerShown: false}} />
          <Stack.Screen name="Statistical" component={Statistical} options={{headerShown: false}} />
          <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
          <Stack.Screen name="DetailShipper" component={DetailShipper} options={{headerShown: false}} />

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
