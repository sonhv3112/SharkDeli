import React from 'react';
import { View, Text, Image } from 'react-native'

import styles from './style'

const Introduce = () => {
  return(
    <View>
      <View style={styles.header}>
        <Text style={styles.back}>B</Text>
        <View style={styles.headerText}>
          <Text style={{fontWeight: 'bold'}}>Đi Chợ</Text>
        </View>
      </View>
    
      <View style={styles.introduce}>
        <View style={styles.introduceLeft}>
          <View style={styles.introduceLeftTop}>
            <Text style={styles.introduceText}>Đi chợ cùng <Text style={[styles.introduceText, {color: 'blue'}]}>SHARKDELI</Text></Text>
          </View>
          <View style={styles.introduceLeftBottom}>
            <Text>Có những ngày bận rộn nhưng vẫn muốn có những bữa ăn ngon lành từ nguyên liệu tươi sống. Giao cho <Text style={{fontWeight: 'bold'}}>SHARKDELI</Text> ngay!</Text>
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