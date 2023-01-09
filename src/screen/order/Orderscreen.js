import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  Button,
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ProductIntro from './ProductIntro';

function Orderscreen({navigation, route}) {
  const item = route.params.propItem; 

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
        <Text style={styles.title}>{item.name_shop}</Text>
        <Text style={styles.subtitle} numberOfLines={1}> {item.content + ' ' + item.address} </Text>
        <Text style={styles.status}>Đang mở cửa</Text>
      </View>
      <TouchableOpacity 
                onPress={() => {}} 
                style={styles.button}> 
                    <Text style={styles.TextStyle}> Giao bởi người giao hàng </Text>
      </TouchableOpacity>
      <TouchableOpacity 
                onPress={() => {}} 
                style={styles.button2}> 
                    <Text style={styles.TextStyle}> Mã giảm giá </Text>
      </TouchableOpacity>

        <View> 
          <Text style={{flex: 1,color: '#000', width: 300, fontSize: 20, fontWeight: 'bold'}}> Tea </Text>
          <FlatList 
            data={Tea}
            renderItem={({item}) => (
              <ProductIntro item={item} navigation={navigation}/>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View> 
        <View> 
          <Text style={{flex: 1, color: '#000', width: 300, fontSize: 20, fontWeight: 'bold'}}> Coffe </Text>
          <FlatList 
            data={Coffe}
            renderItem={({item}) => (
              <ProductIntro item={item} navigation={navigation}/>
            )}showsVerticalScrollIndicator={false}
          />
        </View>
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
   title: { 
    color: "#000",
    fontWeight: 'bold',
    fontSize: 22
  },
  subtitle: { 
    color: "#000",
    fontSize: 15
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
  button: { 
    backgroundColor:'cyan',
    borderRadius:15,
    borderColor: '#fff'
  },
  button2: { 
    backgroundColor:'#0e46ed',
    borderRadius:15,
    borderColor: '#fff'
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
});
export default Orderscreen;
