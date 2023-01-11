import React from 'react';
import { View, Text, Image,  TouchableOpacity} from 'react-native'

import styles from './style'

const NextScreens = (props) => {
  return(
    <View style={styles.container}>

      <View style={styles.butonView}>
       <TouchableOpacity style={styles.buton} onPress={() => props.navigation.navigate('OrderConfirmation', 
        {item:{ isShipper: false, id: '#37462', ReceivingAddress: '252 Nguyễn Văn Cừ, q5, TP Hồ Chí Minh', shop: 'Bún nước cô có, 25 Phan Đình Phùn, Phú Nhuận', orders: [
            {
              name: 'Tré trộn đặc biệt',
              amount: 1,
              note: 'ít cay',
              ingredients: [{name: 'Chả cá', amount: 1}, {name: 'Trứng thêm', amount: 1}],
            },
            {
              name: 'Trà dâu',
              amount: 2,
              note: 'ít đá',
              ingredients: [],
            },
            ] }})}>
         <Text>Danh sách đơn</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.butonView}> 
       <TouchableOpacity style={styles.buton}  onPress={() => props.navigation.navigate('Statistical')}>
         <Text>Xem Thống kê</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

export default NextScreens;