import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

import styles from './style'

//props: id, ReceivingAddress, shop, orders
// const order = (props) => {
//   return(
//     <View>
//       <Text><Text style={{fontWeight: 'bold'}}>{props.name}</Text>: {props.amount}</Text>
//       <Text>(ghi chú: {props.note})</Text>
//       <View>
//           {
//             props.ingredients.map((i, index) => {
//               return <Text>
//                 + {i.name}
//               </Text>
//           })
//           }
//       </View>
//     </View>
//   );
// }

const OrderConfirmation = ({navigation, route}) => {
  const item = route.params.item;

  console.log(item); 

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 20, }}>Đơn hàng {item.id}</Text>
      </View>

      <View style={styles.information}>
        {
          item.isShipper ? 
            <>
              <View style = {styles.ReceivingAddress}>
                <Text style={{fontWeight: 'bold', fontSize: 16, }}>Địa chỉ nhận:</Text>
                <Text> {item.ReceivingAddress}</Text>
              </View>
              <View style = {styles.shop}>
                <Text style={{fontWeight: 'bold', fontSize: 16, }}>Cửa hàng:</Text>
                <Text> {item.shop}</Text>
              </View>
            </>
            :
            <>
            </>
        }

        <View style = {styles.order}>
          <View style={styles.boder}>
          <Text></Text>
          {
            item.orders.map((i, index) => {
            return <ScrollView>
              <Text><Text style={{fontWeight: 'bold'}}>{i.name}</Text>: {i.amount}</Text>
              <Text>(ghi chú: {i.note})</Text>
              <View>
              {
                i.ingredients.map((i, index) => {
                return <Text>
                  + {i.name}: {i.amount}
                  </Text>
                })
              }
              </View>
            </ScrollView>
            })
          }
          </View>
        </View>

        <View style = {{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>Xác nhận đơn:</Text>
        </View>
      </View>

      <View style = {styles.confirmation}>
        <TouchableOpacity style={styles.icon}>
          <Image style={styles.iconImage} source={ require('./noIcon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('DetailShipper')}>
          <Image style={styles.iconImage} source={ require('./yesIcon.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OrderConfirmation;