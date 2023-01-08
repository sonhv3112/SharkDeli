import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function PayScreen(props) {
  return (
    <View>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1,color: 'black', fontSize: 20,}}> Giao hàng đến </Text>
            <Text style={styles.price}> <Icon name="pencil" size={30}/></Text>
          </View>
            <TextInput style={styles.address}> 54 Nguyễn Văn Cừ</TextInput>
        </View>
        <View style={styles.container}>
            <TextInput style={styles.note} defaultValue='Ghi chú cho người giao hàng'/>
        </View>
        <View style={styles.container}>
            <Text style={styles.normalText}>Số điện thoại</Text>
            <TextInput style={styles.container}/>
        </View>
        <View style={styles.container}>
            <Text style={styles.normalText}>Món</Text>
            <View>
              <View style={styles.products}>
                <Text fontSize={20} flex={3}> 1X</Text>
                <View flex={2}>
                  <Text fontSize={20}> Trà đào cam sả</Text>
                  <Text fontSize={15}> Size L, Thạch trái cây</Text>
                </View>
                <Text style={styles.price}> 42.000đ</Text> 
              </View>
            </View>
            <View>
                <View style={styles.deliveryDetail}>
                  <Text style={styles.deliveryDetailText}> Tạm tính</Text>
                  <Text style={styles.price}> 42.000đ</Text>
                </View>
                <View style={styles.deliveryDetail}>
                  <Text style={styles.deliveryDetailText}> Phí vận chuyển: 2.8km <Icon name="questioncircleo" size={20}/></Text>
                  <Text style={styles.price}> 15.000đ</Text>
                </View>
                <View style={styles.deliveryDetail}>
                  <Text style={styles.deliveryDetailText}> Giảm giá</Text>
                  <Text style={styles.discountPrice} color={'green'}> -20.000đ</Text>
                </View>
            </View>
        </View>
        <Text style={{backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: '#d1d1d1',
              borderRadius: 10,
              backgroundColor: '#fff',
              color: 'green',
              fontSize: 20,}}>   <Icon name="ticket" size={20}/> Giảm 20% mừng sinh nhật quán</Text>
        <Text style={{backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: '#d1d1d1',
              borderRadius: 10,
              backgroundColor: '#fff',
              color: 'black',
              fontSize: 20,}}> Thanh toán: <Icon name="money" size={20}/> Tiền mặt</Text>

        <View style={{flexDirection: 'row',
                      backgroundColor: "#fff",
                      borderWidth: 1,
                      borderColor: '#d1d1d1',
                      borderRadius: 10,
                      backgroundColor: '#fff',
                      marginVertical: 5,}}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 15, textDecorationLine: 'line-through'}}> 57.000đ </Text>
            <Text style={{fontSize: 20}}> 37.000đ </Text>
          </View>
          <View style={{flex: 3}}>
            <Button style={{alignSelf: 'center'}}color={"cyan"} title="Đặt hàng"/>
          </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
    },
    image: {
      height: 200,   
      width: '100%',
      top: 0,
     },
     normalText: {
      color: 'black',
      fontSize: 20,
     },
     address: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold'
     },
     deliveryDetail: {
      color: 'black',
      flexDirection: 'row',
      fontSize: 20,
     },
     products: {
      color: 'black',
      flexDirection: 'row'
     },
     price: {
      fontSize: 20,
      color: 'black',
      alignSelf: 'flex-end'
     },
     deliveryDetailText: {
      color: 'black',
      fontSize: 20,
      flex: 1,
     },
     discountPrice: {
      fontSize: 20,
      color: 'green',
      alignSelf: 'flex-end'
     },
  });
export default PayScreen;
