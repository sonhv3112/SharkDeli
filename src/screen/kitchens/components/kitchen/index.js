import React from 'react';
import { View, Text, Image } from 'react-native'

import styles from './style'

const Kitchen = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.image} source={props.image}/>
      </View>
      
      <View style={styles.center}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Bếp ăn {props.name}</Text>
        <Text>SHARKDELI</Text>
        <View>
          {
            props.foods.map((i, index) => {
              return <Text style={{color: '#22a0cd', fontSize: 12}}>
                * {i}
              </Text>
          })
          }
        </View>
      </View>
      
      <View style={styles.bottom}>
        <Text>{props.far}</Text>
      </View>
    </View>
  );
}

export default Kitchen;