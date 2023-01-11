import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NextScreens from './components/nextScreens/index'
import Product from './components/product/index'

const data = [
  {
    image: require('./images/traDaoCamSa.png'),
    name: 'Trà đào cam sả',
    tyle: 'Trà đào cam sả 3 miếng đào',
    price: '45.000',
  },
  {
    image: require('./images/traVai.png'),
    name: 'Trà vải',
    tyle: 'Trà nhài vải size L',
    price: '40.000',
  },
  {
    image: require('./images/traXoaiDaXay.png'),
    name: 'Trà  xoài đá xay',
    tyle: 'Trà  xoài cùng lớp kem béo mịn và xoài ngọt ngào',
    price: '45.000',
  },
  {
    image: require('./images/traDauDaXay.png'),
    name: 'Trà dâu đá xay',
    tyle: 'Trà  dâu cùng lớp kem béo mịn và dâu chua nhẹ',
    price: '55.000',
  },
];

export default function Shop({navigation, route}) {
  return (
    <View style={styles.container}>
      <View style={styles.nextScreens}>
        <NextScreens navigation={navigation}/>
        </View>

      <ScrollView contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap'}}
      >
        {
          data.map((i, index) => {
            return <View style={styles.markets}>
              <Product key={index} image={i.image} name={i.name} tyle={i.tyle} price={i.price}/>
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
  nextScreens: {
    height: 200,
  },
  markets: {
    width : '50%',
    flexDirection : "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
