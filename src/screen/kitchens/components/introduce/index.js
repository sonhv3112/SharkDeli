import React from 'react';
import { View, Text, Image } from 'react-native'

import styles from './style'

const Introduce = () => {
  return(
    <View>
      <View style={{...styles.header}}>
        <Text style={styles.back}>B</Text>
        <View style={styles.headerText}>
          <Text style={{fontWeight: 'bold'}}>Bếp ăn hệ thống</Text>
        </View>
      </View>
    
      <View style={styles.introduce}>
        <View style={styles.introduceLeft}>
          <View style={styles.introduceLeftTop}>
            <Text style={styles.introduceText}>Nhớ bữa cơm nhà</Text>
            <Text style={styles.introduceText}>Sà vào <Text style={[styles.introduceText, {color: 'blue'}]}>SHARKDELI</Text> ngay!</Text>
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