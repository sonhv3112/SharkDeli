import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './style'

const Product = (props) => {
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
        <Text>{props.price}</Text>
      </View>

      
      <View style={styles.butonView}>
        <TouchableOpacity style={styles.buton}>
          <Text style={{fontWeight: 'bold'}}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Product;