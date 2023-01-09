import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './style'

const Introduce = ({navigation}) => {
  return(
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.back} source={ require('./goBack.png')} />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Đi Chợ</Text>
        </View>
      </View>
    
      <View style={styles.introduce}>
        <View style={styles.introduceLeft}>
          <View style={styles.introduceLeftTop}>
            <Text style={styles.introduceText}>Đi chợ cùng <Text style={[styles.introduceText, {color: '#22a0cd'}]}>SHARKDELI</Text></Text>
          </View>
          <View style={styles.introduceLeftBottom}>
            <Text style={{fontSize: 14, }}>Có những ngày bận rộn nhưng vẫn muốn có những bữa ăn ngon lành từ nguyên liệu tươi sống. Giao cho <Text style={{fontWeight: 'bold'}}>SHARKDELI</Text> ngay!</Text>
          </View>
        </View>
        <View style={styles.introduceRight}>
          <Image style={styles.image} source={ require('../../images/introduce.png')}/>
        </View>
      </View>
    </View>
  );
}

export default Introduce;