import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Introduce from './components/introduce/index'
import Kitchen from './components/kitchen/index'

const data = [
  {
    image: require('./images/NguyenTrai.png'),
    name: 'Nguyễn Trãi',
    foods: ['Cơm cá kho tộ', 'Hủ tiếu xào', 'Cơm thịt luộc dưa cà'],
    far: '3.2km',
  },
  {
    image: require('./images/NguyenVanCu.png'),
    name: 'Nguyễn Văn Cừ',
    foods: ['Cơm chiên dương châu', 'Cơm gà kho sả', 'Bánh xèo miền Trung'],
    far: '0.2km',
  },
  {
    image: require('./images/AnDuongVuong.png'),
    name: 'An Dương Vương',
    foods: ['Cơm chiên dương châu', 'Canh chả cá thát lác', 'Cơm chay thập cẩm'],
    far: '1.2km',
  }
];

export default function Kitchens({navigation}) {
  return (
    <View style={styles.container}>
      <Introduce navigation={navigation}/>
      <ScrollView contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap'}}
      >
        {
          data.map((i, index) => {
            return <View style={styles.kitchens}>
              <Kitchen key={index} image={i.image} name={i.name} foods={i.foods} tyle={i.tyle} far={i.far}/>
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
  kitchens: {
    width : '50%',
    flexDirection : "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
