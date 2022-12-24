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
        <Text style={{fontWeight: 'bold'}}>Bếp ăn {props.name}</Text>
        <Text>SHARKDELI</Text>
        <View>
          {
            props.foods.map((i, index) => {
              return <Text style={{color: 'blue', fontSize: 8}}>
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