import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function DeliveryDetail(props) {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.normalText}>Thông tin người nhận</Text>
            <Text style={{fontSize: 20, color: 'black'}}>      Lee Min-ho</Text>
            <Text style={{fontSize: 20, color: 'black'}}>      0987654321</Text>
            <Text style={{fontSize: 20, color: 'black'}}>      54 Nguyễn Văn Cừ Phường 4, Quận 5, TP. Hồ Chí Minh</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.normalText}>Thông tin giao hàng</Text>
            <Text style={{fontSize: 20, color: 'green'}}>   Giao hàng thành công</Text>
        </View>
        <View style={styles.container}>
            <Text style={{fontSize: 20, color: 'black'}}>Món</Text>
            <View style={styles.rowContainer}>
              <View style={{color: 'black', flexDirection: 'row', flex: 4}}>
                <Text fontSize={20} flex={1}> 1X  </Text>
                <View flex={5}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}> Trà đào cam sả</Text>
                  <Text fontSize={15}> Size L, Thạch trái cây</Text>
                </View>
                <Text style={styles.price}> 42.000đ</Text> 
              </View>
            </View>
        </View>
        <View style={styles.container}>
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
            <View style={styles.deliveryDetail}>
                <Text style={{color: 'black', fontSize: 20, flex: 1, fontWeight: 'bold'}}> Thành tiền</Text>
                <Text style={{fontSize: 20, color: 'black', alignSelf: 'flex-end', fontWeight: 'bold'}}> 37.000đ</Text>
            </View>
        </View>
        <View style={styles.container}>
            <Text style={{fontSize: 20, color: 'black'}}>Hình thức thanh toán</Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>   Tiền mặt</Text>
        </View>
        <Button style={{color: '#f77f43',
                    borderWidth: 1,
                    borderColor: '#d1d1d1',
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    marginVertical: 5,}} color={'#f77f43'} title="Đánh giá ngay + 200 Xu"/>
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
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    storeName: {
        color: 'blue',
        fontSize: 20,
    },
    products: {
        color: 'black',
        flexDirection: 'row'
    },
    normalText: {
        color: 'black',
        fontSize: 20,
    },
    price: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'flex-end'
    },
    deliveryDetail: {
        color: 'black',
        flexDirection: 'row',
        fontSize: 20,
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
export default DeliveryDetail;
