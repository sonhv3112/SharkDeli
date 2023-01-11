import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { Card, Button, Title, Paragraph, TextInput, RadioButton, Divider, IconButton, Checkbox } from 'react-native-paper';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableWithoutFeedback,
  FlatList,
  ScroolView,
  Alert,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const Tea = [
        {
          name: "Trà đào cam sả",
          size: ['M', 'L'],
          topping: ["Trân châu đen", "Trân châu trăng", "Thạch trái cây", "Trân châu thủy tinh"],
          price: "30.000đ",
          priceNum: 30000,
          img: require('../../../IMG/Tea.jpg')
        },
        {
          name: "Trà sữa trân châu",
          size: ['M', 'L'],
          topping: ["Trân châu đen", "Trân châu trăng", "Thạch trái cây", "Trân châu thủy tinh"],
          price: "30.000đ",
          priceNum: 30000,
          img: require('../../../IMG/Tea.jpg')
        }
      ]
const Coffe = [
        {
          name: "Capuchino",
          size: ['M', 'L'],
          topping: ["Trân châu đen", "Trân châu trăng", "Thạch trái cây", "Trân châu thủy tinh"],
          price: "30.000đ",
          priceNum: 30000,
          img: require('../../../IMG/Coffe.jpg')
        },
        {
          name: "Espresso",
          size: ['M', 'L'],
          topping: ["Trân châu đen", "Trân châu trăng", "Thạch trái cây", "Trân châu thủy tinh"],
          price: "30.000đ",
          priceNum: 30000,
          img: require('../../../IMG/Coffe.jpg')
        },
      ]

const store = {
  name: "Phúc Long - Nguyễn Thị Minh Khai",
  addr: "145 Nguyễn Thị Minh Khai, Phường Đa Cao, Quận 1, TP. Hồ Chí Minh",
  distance: 2.8
}


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ProductIntro from './ProductIntro';

function Orderscreen({navigation, route}) {
  {/*const item = route.params.propItem; */}

  return (
      <ScrollView style={styles.container}>
        <ImageBackground source={require('../../../IMG/home.jpg')} resizeMode="cover" style={styles.image}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <TouchableOpacity style={{}} onPress={()=>navigation.goBack()}>
                <AntDesign name='arrowleft' style={{fontSize:22, marginRight:20,paddingTop: 10, marginLeft:10}}></AntDesign>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', alignSelf: "flex-end", paddingTop: '2%', paddingRight:'2%'}} onPress={()=>navigation.navigate('Chat')}>
              <Ionicons name='chatbubble-ellipses-outline' size={32} color='white' style={{}}></Ionicons>
            </TouchableOpacity>
          </View>
        </ImageBackground>


        <View style={{paddingLeft: 15, paddingRight: 15}}>
          <View>
            <Text style={styles.sectionTitle}>{store.name}</Text>
            <Text style={styles.sectionContent} numberOfLines={1}> {store.distance + "km" + ' ' + store.addr}</Text>
            <Text style={styles.status}>Đang mở cửa</Text>
          </View>

          <View style={{...styles.sectionContainer, borderBottomWidth: 1, borderColor: 'silver'}}>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => {console.log("nguoi giao")}}>
                <AntDesign name='rocket1' size={20} color='green'/>
                <Text style={styles.shipperName} numberOfLines={1}>
                    Giao bởi người giao hàng
                </Text>
                <MaterialIcons name='chevron-right' size={20} color='black'/>
            </TouchableOpacity>
          </View>

          <View style={{...styles.sectionContainer, borderBottomWidth: 1, borderColor: 'silver'}}>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => {console.log("nguoi giao")}}>
                <MaterialCommunityIcons name='ticket-percent-outline' size={20} color='blue'/>
                <Text style={styles.discount} numberOfLines={1}>
                    Mã giảm giá
                </Text>
                <MaterialIcons name='chevron-right' size={20} color='black'/>
            </TouchableOpacity>
          </View>

          <View style={{...styles.sectionContainer , borderBottomWidth: 1, borderColor: 'silver'}}>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => {console.log("nguoi giao")}}>
                <AntDesign name='star' size={20} color='yellow'/>
                <Text style={{...styles.discount, color: 'black'}} numberOfLines={1}>
                    4.6 (23)
                </Text>
                <Feather name='shopping-bag' size={20} color='black'/>
                <Text style={{...styles.discount, color: 'black'}} numberOfLines={1}>
                    Đã bán 12345
                </Text>
                <MaterialIcons name='chevron-right' size={20} color='black'/>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={{...styles.sectionTitle}}> Tea </Text>
            <View style={{...styles.sectionContainer, borderWidth: 1, borderColor: 'silver'}}>
            {Tea.map(item =>{
              return (<TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
                <View style={{...styles.sectionContainer, flexDirection: 'row'}}>
                  <View style={{...styles.sectionContainer, flex: 3, padding: 5}}>
                    <Text style={{...styles.sectionContent, padding: 5,}}> {item.name} </Text>
                    <Text style={{...styles.sectionContent, padding: 5}}> {item.price} </Text>
                  </View>
                  <Image source={item.img} resizeMode='stretch' style={{...styles.prodImage, padding: 5 }}/>
                </View>
              </TouchableOpacity>);
            })}
            </View>
            <Text style={{...styles.sectionTitle}}> Coffe </Text>
            <View style={{...styles.sectionContainer, borderWidth: 1, borderColor: 'silver'}}>
              {Coffe.map(item =>{
                return (<TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
                  <View style={{...styles.sectionContainer, flexDirection: 'row'}}>
                    <View style={{...styles.sectionContainer, flex: 3, padding: 5}}>
                      <Text style={{...styles.sectionContent, padding: 5,}}> {item.name} </Text>
                      <Text style={{...styles.sectionContent, padding: 5}}> {item.price} </Text>
                    </View>
                    <Image source={item.img} resizeMode='stretch' style={{...styles.prodImage, padding: 5 }}/>
                  </View>
                </TouchableOpacity>);
              })}
            </View>
          </View>
        </View>
        <View style={styles.buyButton}>
          <Button 
            mode='contained' 
            onPress={() => { navigation.navigate('PayScreen') }}
            compact={true}
            buttonColor='green'
            textColor='white'
            labelStyle={{fontSize: 17}}
            >
              {"Mua ngay" + " xxxx" + "đ"}
          </Button>
        </View>
      </ScrollView>
    
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
export default Orderscreen;
