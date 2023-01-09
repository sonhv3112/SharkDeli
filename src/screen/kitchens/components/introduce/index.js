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
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Bếp ăn hệ thống</Text>
        </View>
      </View>
    
      <View style={styles.introduce}>
        <View style={styles.introduceLeft}>
          <View style={styles.introduceLeftTop}>
            <Text style={styles.introduceText}>Nhớ bữa cơm nhà</Text>
            <Text style={styles.introduceText}>Sà vào <Text style={[styles.introduceText, {color: '#22a0cd'}]}>SHARKDELI</Text> ngay!</Text>
          </View>
          <View style={styles.introduceLeftBottom}>
            <Text>Thấu hiểu nỗi lòng của những người con xa xứ, <Text style={{fontWeight: 'bold'}}>SHARKDELI</Text> phục vụ cho bạn bữa cơm như ngay chính gia đình mình!</Text>
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