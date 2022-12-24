import React from 'react';
import { View, Text, Image } from 'react-native'

import styles from './style'

const Market = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.image} source={props.image}/>
      </View>
      
      <View style={styles.center}>
        <Text style={{fontWeight: 'bold'}}>{props.name}</Text>
        <Text style={{fontSize: 8}}>{props.tyle}</Text>
      </View>
      
      <View style={styles.bottom}>
        <Text>{props.far}</Text>
      </View>
    </View>
  );
}

export default Market;