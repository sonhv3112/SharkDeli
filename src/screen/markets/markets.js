import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Introduce from './components/introduce/index'
import Market from './components/market/index'

const data = [
  {
    image: require('./images/WinMart.png'),
    name: 'Winmart 3/2',
    tyle: 'Tiêu dùng và đồ tươi sống',
    far: '3.2km',
  },
  {
    image: require('./images/MeatDeli.png'),
    name: 'Meat Deli Nguyễn Trung Trực',
    tyle: 'Các mặt hàng thịt',
    far: '0.2km',
  },
  {
    image: require('./images/CircleK.png'),
    name: 'Circle K - Nguyễn Văn Cừ',
    tyle: 'Cửa hàng tiện lợi',
    far: '1.2km',
  },
  {
    image: require('./images/CoopMart.png'),
    name: 'Coopmart Cống Quỳnh',
    tyle: 'Mua sắm',
    far: '10.5km',
  },
];

export default function Markets() {
  return (
    <View style={styles.container}>
      <Introduce />
      <ScrollView contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap'}}
      >
        {
          data.map((i, index) => {
            return <View style={styles.markets}>
              <Market key={index} image={i.image} name={i.name} tyle={i.tyle} far={i.far}/>
            </View>
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  markets: {
    width : '50%',
    flexDirection : "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
