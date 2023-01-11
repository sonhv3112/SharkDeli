import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView, StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, ScrollView, Image, Pressable} from 'react-native';
import { Card, Button, Title, Paragraph, TextInput, RadioButton, Divider, IconButton, Checkbox } from 'react-native-paper';

function PayScreen({navigation, route}) {
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
    <SafeAreaView style={{paddingLeft: 15, paddingRight: 15}}>
          <View style={{...styles.sectionContainer, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{flex: 1}} onPress={()=>navigation.goBack()}>
                <AntDesign name='arrowleft' style={{fontSize:22, marginRight:20,paddingTop: 10, marginLeft:10}} color='black'></AntDesign>
            </TouchableOpacity>
            <Text style={{...styles.sectionTitle, textAlign: 'left', flex: 6}} numberOfLines={1}> {order.shopName} </Text>
          </View>


        <View style={styles.sectionContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.sectionContent}> Giao hàng đến </Text>
            <Ionicons style={{alignSelf: 'flex-end'}} name='pencil' size={20} color='blue'/>
          </View>
            <TextInput style={{...styles.sectionTitle, backgroundColor: 'white'}}> {order.address} </TextInput>
        </View>
        <Text style={styles.sectionContent}> Ghi chú cho người giao hàng </Text>
        <View style={{...styles.sectionContainer, flexDirection: 'row', alignItems: 'center', padding: 0}}>
            <MaterialCommunityIcons  name='note-edit-outline' size={20} color='blue'/>
            <TextInput 
              style={{backgroundColor: 'white', width: "85%"}} 
              selectionColor='blue'
              placeholder={"Ghi chú cho nhà hàng"}
              underlineColor='transparent'
              />
        </View>

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
            </View>
        </View>
        <View style={{...styles.sectionContainer, borderBottomWidth: 1, borderColor: 'silver'}}>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => {console.log("nguoi giao")}}>
                <MaterialCommunityIcons name='ticket-percent-outline' size={20} color='green'/>
                <Text style={styles.shipperName} numberOfLines={1}>
                    Giảm 20% mừng sinh nhật quán
                </Text>
                <MaterialIcons name='chevron-right' size={20} color='black'/>
            </TouchableOpacity>
        </View>
       
        <View style={{...styles.sectionContainer, borderBottomWidth: 1, borderColor: 'silver'}}>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => {console.log("nguoi giao")}}>
                <Text style={{...styles.sectionContent, flex: 1}} numberOfLines={1}>
                    Thanh toán: <FontAwesome name='money' size={20} color='blue'/> tiền mặt
                </Text>
                <MaterialIcons name='chevron-right' size={20} color='black'/>
            </TouchableOpacity>
        </View>

        <View style={{...styles.sectionContainer, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={{...styles.sectionContent, textDecorationLine: 'line-through'}}> {order.price} </Text>
            <Text style={{...styles.sectionTitle}}> {order.finalPrice} </Text>
          </View>
          <View style={{...styles.buyButton, flex: 2}}>
            <Button 
              mode='contained' 
              onPress={() => navigation.navigate('Home')}
              compact={true}
              buttonColor='blue'
              textColor='white'
              labelStyle={{fontSize: 17}}
              >
                {"Đặt hàng"}
            </Button>
          </View>
        </View>

        
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  image: {
    height: 200,   // height and width as per you content
    width: '100%',
    top: 0,
  },
  prodImage: {
    height: 70,   // height and width as per you content
    width: 70,
    flex: 1
  },
  status: { 
    fontWeight: 'bold',
    color: "green",
    fontSize: 20
  },
  productIntro: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
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
  discount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
    paddingHorizontal: 5,
    flex: 1
  },

  shipperName: {
    fontSize: 15,
    color: 'green',
    flex: 1
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
  });
export default PayScreen;
