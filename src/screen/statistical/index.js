import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native'

import styles from './style'


const data = [
  {
    name: 'Tổng số đơn tháng',
    amount: 5281,
  },
  {
    name: 'Trà tắc',
    amount: 1520,
  },
  {
    name: 'Trà vải',
    amount: 1020,
  },
  {
    name: 'Trà xoài',
    amount: 1427,
  },
  {
    name: 'Dâu tây đá xay',
    amount: 1510,
  },
  {
    name: 'Xoài đá xay',
    amount: 1202,
  },
];

const Statistical = () => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Thống kê đơn</Text>
      </View>

      <View style={styles.information}>
      
        <View style={styles.imageView}>
          <Image style={styles.image} source={ require('./statistical.png')}/>
        </View>

        <View style = {styles.statistical}>
          <View style={styles.boder}>
          <Text></Text>
          {
            data.map((i, index) => {
            return <ScrollView>
              <Text>{i.name}: {i.amount}</Text>
            </ScrollView>
            })
          }
          </View>
        </View>
      </View>

    </View>
  );
}

export default Statistical;