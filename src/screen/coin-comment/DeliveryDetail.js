import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView, StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, ScrollView, Image, Pressable} from 'react-native';
import { Card, Button, Title, Paragraph, TextInput, RadioButton, Divider, IconButton, Checkbox } from 'react-native-paper';

function DeliveryDetail({navigation, route}) {
    const user = {  
        name: "Lee Min-ho",
        phoneNumber: "0987654321",
        address: "54 Nguyễn Văn Cừ Phường 4, Quận 5, TP. Hồ Chí Minh"
    }
    const order ={
        address: "54 Nguyễn Văn Cừ",
        price: "84.000đ",
        shipPrice: "15.000đ",
        discount: "20.000đ",
        finalPrice: "79.000đ",
        distance: 2.8,
        shopName: "Phúc Long - Nguyễn Thị Minh Khai",
        item: [
                {
                  topping: "Thạch trái cây",
                  price: "42.000đ",
                  name: "Trà đào cam sả",
                  size: "L",
                  quantity: 1,
                },
                {
                  topping: "Thạch trái cây",
                  price: "42.000đ",
                  name: "Trà đào cam sả",
                  size: "M",
                  quantity: 1,
                }
              ]
      }
  return (
    <ScrollView style={styles.sectionContainer}>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', }}>
            <TouchableOpacity style={{position: 'absolute', left: 0, }} onPress={()=>navigation.goBack()}>
                <AntDesign name='arrowleft' style={{fontSize:22, }} color='black'></AntDesign>
            </TouchableOpacity>
            <Text style={{...styles.sectionTitle, }}> Thông tin đơn hàng </Text>
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Thông tin người nhận</Text>
            <Text style={styles.sectionContent}>      {user.name}</Text>
            <Text style={styles.sectionContent}>      {user.phoneNumber}</Text>
            <Text style={styles.sectionContent}>      {user.address}</Text>
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Thông tin giao hàng</Text>
            <View style={{...styles.sectionContainer, borderBottomWidth: 1, borderColor: 'silver'}}>
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => {console.log("nguoi giao")}}>
                    <Text style={{...styles.sectionContent, color: 'green', flex: 1, fontSize: 18}} numberOfLines={1}>     Giao hàng thành công </Text>
                    <MaterialIcons name='chevron-right' size={30} color='green'/>
                </TouchableOpacity>
            </View>
            <View style={{...styles.sectionContainer, flexDirection: 'row'}}>
                <AntDesign name='rocket1' size={24} color='black'/>
                <View style={{}}>
                    <Text style={{...styles.sectionContent, color: 'black', fontWeight: 'bold'}}> Giao bởi người giao hàng</Text>
                    <Text style={{...styles.sectionContent, color: 'grey'}}> Không có ghi chú giao hàng</Text>
                </View>
            </View>
        </View>

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Món</Text>
            {order.item.map(item => {
              return (
                <View>
                  <View style={{...styles.sectionContainer, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{...styles.sectionContent, fontSize: 16, textAlign: 'center', flex: 1}}> {String(item.quantity) + "X"}</Text>
                    <View style={{...styles.sectionContainer, flex: 3}}>
                      <Text style={styles.sectionContent}> {item.name}</Text>
                      <Text style={styles.sectionContent}> {"Size " + item.size + ", " + item.topping}</Text>
                    </View>
                    <Text style={{...styles.sectionContent, textAlign: 'right', flex: 2}}> {item.price} </Text> 
                  </View>
                </View>
              );
            })}
            
            <View style={{...styles.sectionContainer, padding: 0}}>
                <View style={{...styles.sectionContainer, flexDirection: 'row', padding: 0}}>
                  <Text style={{...styles.sectionContent, flex: 2}}> Tạm tính</Text>
                  <Text style={{...styles.sectionContent, textAlign: 'right', flex: 1}}> {order.price}</Text>
                </View>
                <View style={{...styles.sectionContainer, flexDirection: 'row', padding: 0}}>
                  <Text style={{...styles.sectionContent, flex: 2}}> {"Phí vận chuyển: " + String(order.distance) + "Km"}</Text>
                  <Text style={{...styles.sectionContent, textAlign: 'right', flex: 1}}> {order.shipPrice}</Text>
                </View>
                <View style={{...styles.sectionContainer, flexDirection: 'row', padding: 0}}>
                  <Text style={{...styles.sectionContent, flex: 2}}> Giảm giá</Text>
                  <Text style={{...styles.sectionContent, textAlign: 'right', flex: 1, color: 'green'}}> {"-" + order.discount}</Text>
                </View>
                <View style={{...styles.sectionContainer, flexDirection: 'row', padding: 0}}>
                  <Text style={{...styles.sectionContent, flex: 2, fontWeight: 'bold'}}> Thành tiền</Text>
                  <Text style={{...styles.sectionContent, textAlign: 'right', flex: 1, fontWeight: 'bold'}}> {order.finalPrice}</Text>
                </View>
            </View>
        </View>

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionContent}>Hình thức thanh toán</Text>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>   Tiền mặt</Text>
        </View>

        <View style={{...styles.buyButton}}>
            <Button 
              mode='contained' 
              onPress={() => console.log('buy')}
              compact={true}
              buttonColor='orange'
              textColor='white'
              labelStyle={{fontSize: 17}}
              >
                {"Đánh giá ngay nhận + 200 xu"}
            </Button>
          </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    image: {
        height: 400,   // height and width as per you content
        width: '100%',
        resizeMode: 'cover',
        top: 0,
      },
      homeImg: {
        width: "100%",
        height: 200,
      },
      messageButton: {
        alignSelf: "flex-end",
        width: 50,
        height: 50,
      },
      TextStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
      },
      sectionContainer: {
        backgroundColor: 'white',
        padding: 15,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
      },
      sectionContent: {
        fontSize: 15,
        color: 'grey',
        paddingVertical: 3
      },
      buyButton: {
        height: 50 + 10,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        marginBottom: 15,
      },
      textinput: {
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
      },
      radiobuttonItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
      },
    
      radiobuttonItemContent: {
        fontSize: 15,
        color: 'black',
      },
      checkboxItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
      },
    
      checkboxItemContent: {
        fontSize: 15,
        color: 'black',
        marginRight: 50
      },
      quanityButton: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1',
      },
      quanitySelect: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#e3e3e3',
        width: 130,
      },
  });
export default DeliveryDetail;
