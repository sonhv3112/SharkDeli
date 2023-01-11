import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView, StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, ScrollView, Image, Pressable} from 'react-native';
import { Card, Button, Title, Paragraph, TextInput, RadioButton, Divider, IconButton, Checkbox } from 'react-native-paper';

function DeliveryInfo(props) {
  const order ={
    address: "54 Nguyễn Văn Cừ",
    price: "84.000đ",
    shipPrice: "15.000đ",
    discount: "20.000đ",
    finalPrice: "79.000đ",
    distance: 2.8,
    shopName: "Phúc Long - Nguyễn Thị Minh Khai",
    quantity: 2,
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
  const StatusBar = (props) => { 
    return (
        <View style={{paddingLeft: 15, flexDirection: 'row', marginTop: 5, backgroundColor: '#fff', paddingTop: 8, paddingBottom: 8}}>
            <TouchableOpacity style={{...styles.statusItem, backgroundColor: '#00A6E4'}}>
                <Text style={{fontSize: 15, color: 'white'}}>Đang giao</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.statusItem}}>
                <Text style={{fontSize: 15, color: 'black'}}>Đã giao</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.statusItem}}>
                <Text style={{fontSize: 15, color: 'black'}}>Đã hủy</Text>
            </TouchableOpacity>
        </View>
    ); 
}
  return (
    <View style={styles.sectionContainer}>
        <Text style={{...styles.sectionTitle, color: 'cyan'}}> Phúc Long - Nguyễn Thị Minh Khai </Text>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Món</Text>
            {order.item.map(item => {
              return (
                <View>
              <View style={{...styles.sectionContainer, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{...styles.sectionContent, fontSize: 30, textAlign: 'center', flex: 1}}> {String(item.quantity) + "X"}</Text>
                <View style={{...styles.sectionContainer, flex: 3}}>
                  <Text style={styles.sectionContent}> {item.name}</Text>
                  <Text style={styles.sectionContent}> {"Size " + item.size + ", " + item.topping}</Text>
                </View>
                <Text style={{...styles.sectionContent, textAlign: 'right', flex: 2}}> {item.price} </Text> 
              </View>
            </View>
              );
            })}
            <View style={{...styles.sectionContainer, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{...styles.sectionContent, flex: 2, textAlign: 'center'}}> {String(order.quantity) + " món" }</Text>
              <Text style={{...styles.sectionContent, fontWeight: 'bold', flex: 1, textAlign: 'center'}}> Thành tiền</Text>
              <Text style={{...styles.sectionContent, fontWeight: 'bold', flex: 1, textAlign: 'right'}}> {order.finalPrice} </Text>
            </View>
        </View>
        <View style={{...styles.sectionContainer}}>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => {console.log("nguoi giao")}}>
                <Text style={{...styles.sectionContent, color: 'green', flex: 1, fontSize: 15}} numberOfLines={1}>     Giao hàng thành công </Text>
                <MaterialIcons name='chevron-right' size={15} color='green'/>
            </TouchableOpacity>
        </View>
    </View>
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
    marginBottom: 10,
    marginEnd: 10,
    padding: 1,
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
    backgroundColor: 'white'
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
export default DeliveryInfo;
