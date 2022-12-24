import React from 'react';
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
  Alert
} from 'react-native';

const Tea = [
        {
          name: "Trà đào cam sả",
          size: ['M', 'L'],
          topping: ["Trân châu đen", "Trân châu trăng", "Thạch trái cây", "Trân châu thủy tinh"],
          price: "30.000đ",
          priceNum: 30000,
          img: require('../../assets/background.png')
        },
        {
          name: "Trà sữa trân châu",
          size: ['M', 'L'],
          topping: ["Trân châu đen", "Trân châu trăng", "Thạch trái cây", "Trân châu thủy tinh"],
          price: "30.000đ",
          priceNum: 30000,
          img: require('../../assets/background.png')
        }
      ]
const Coffe = [
        {
          name: "Capuchino",
          size: ['M', 'L'],
          topping: ["Trân châu đen", "Trân châu trăng", "Thạch trái cây", "Trân châu thủy tinh"],
          price: "30.000đ",
          priceNum: 30000,
          img: require('../../assets/background.png')
        },
        {
          name: "Espresso",
          size: ['M', 'L'],
          topping: ["Trân châu đen", "Trân châu trăng", "Thạch trái cây", "Trân châu thủy tinh"],
          price: "30.000đ",
          priceNum: 30000,
          img: require('../../assets/background.png')
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

function Orderscreen(props) {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={require('../../assets/background.png')} />
      <Text style={styles.title}>Phúc Long Nguyễn - Thị Minh Khai </Text>
      <Text style={styles.subtitle} numberOfLines={1}> 2.8km 124 Nguyễn Thị Minh Khai quận 5 TP. Hồ Chí Minh</Text>
      <Text style={styles.status}>Đang mở cửa</Text>
      <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, }}/>
      <Button style={styles.button} color={"cyan"} title="Giao bởi người giao hàng" onPress={() => Alert.alert('Giao hang')}/>

      <Button style={styles.button}  title="Mã giảm giá" onPress={() => Alert.alert('Giam gia')}/>
        <View> 
          <Text style={{flex: 1,color: '#000', width: 300, fontSize: 20, fontWeight: 'bold'}}> Tea </Text>
          <FlatList 
            data={Tea}
            renderItem={({item}) => (
              <ProductIntro item={item} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View> 
          <Text style={{flex: 1, color: '#000', width: 300, fontSize: 20, fontWeight: 'bold'}}> Coffe </Text>
          <FlatList 
            data={Coffe}
            renderItem={({item}) => (
              <ProductIntro item={item} />
            )}showsVerticalScrollIndicator={false}
          />
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
    fontSize: 25
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
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  }
});
export default Orderscreen;
