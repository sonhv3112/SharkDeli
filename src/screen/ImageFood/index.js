import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style'

//item: name, image
const ImageFood = ({navigation, route}) => {
  const item = route.params.item;
  console.log(item); 

  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>SHARKDELI</Text>
      </View>
      
      <View style={styles.information}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={item.image}/>
        </View>
        
        <View style={styles.nameView}>
          <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        </View>
        
        <View style={styles.detailBottomView}>
          <TouchableOpacity style={styles.detailBottom} onPress={() => navigation.navigate('Shop')}>
            <Text>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default ImageFood;