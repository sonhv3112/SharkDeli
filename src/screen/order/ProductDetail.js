import React, { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Pressable,
  Button,
  Alert,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const size = ['M', 'L']
// const topping = ['Trân châu đen', 'Trân châu trăng', 'Thạch trái cây', 'Trân châu thủy tinh']
const PriceNum = 30000

// const Tea = [
//   {
//     name: "Trà đào cam sả",
//     size: ['M', 'L'],
//     topping: ["Trân châu đen", "Trân châu trăng", "Thạch trái cây", "Trân châu thủy tinh"],
//     price: "30.000đ",
//     priceNum: 30000,
//     img: require('../../../IMG/Tea.jpg')
//   },
//   {
//     name: "Trà sữa trân châu",
//     size: ['M', 'L'],
//     topping: ["Trân châu đen", "Trân châu trăng", "Thạch trái cây", "Trân châu thủy tinh"],
//     price: "30.000đ",
//     priceNum: 30000,
//     img: require('../../../IMG/Tea.jpg')
//   }
// ]

function ProductDetail({navigation, route}) {
  const [quantity, setQuantity] = useState(1)
  const onMinus = () => {
    setQuantity(Math.max(1,quantity-1))
  };

  const onPlus = () => {
    setQuantity(quantity+1)
  };

  const item = route.params.propItem; 

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={require('../../../IMG/home.jpg')} />
      <View style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '#d1d1d1',
                borderRadius: 10,
                backgroundColor: '#fff',
                marginVertical: 5,
              }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={{flex: 1, textAlign: 'right', fontSize: 20}}>{item.price}</Text>
      </View>
      <View>
        <TextInput style={styles.note} defaultValue='Ghi chú cho nhà hàng'>
        </TextInput>
      </View>
      <View>
        <Text style={styles.title}>
            Chọn size
        </Text>
        <View style={styles.container}>
          {item.size.map(d => {
            return (<View style={{flexDirection: 'row'}}>
                    <BouncyCheckbox
                      width={30}
                      size={25}
                      fillColor="blue"
                      unfillColor="#fff"
                      disableText={true}
                      iconStyle={{ borderColor: "red" }}
                      innerIconStyle={{ borderWidth: 2 }}
                      onPress={(isChecked) => {}}
                    />
                    <Text style={styles.selection}>{d}</Text>
                  </View>);
          })}
        </View>
        <Text style={styles.title}>
            Chọn topping
        </Text>

        <View style={styles.container}>
          {item.topping.map(d => {
            return (<View style={{flexDirection: 'row'}}>
                    <BouncyCheckbox
                      width={30}
                      size={25}
                      fillColor="blue"
                      unfillColor="#fff"
                      disableText={true}
                      iconStyle={{ borderColor: "red" }}
                      innerIconStyle={{ borderWidth: 2 }}
                      onPress={(isChecked) => {}}
                    />
                    <Text style={styles.selection}>{d}</Text>
                  </View>);
          })}
        </View>
        <View style={styles.productIntro}>
          <View style={styles.quanitySelect}>
            <Pressable onPress={onMinus} style={styles.quanityButton}>
              <Text style={styles.butonText}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable onPress={onPlus} style={styles.quanityButton}>
              <Text style={styles.butonText}>+</Text>
            </Pressable>
          </View>
          {/*<Button style={styles.button} title={"Thêm " + String(price) + "đ"} onPress={() => Alert.alert('Da them')}/>*/}
          <TouchableOpacity 
                onPress={() => {}} 
                style={styles.button}> 
                    <Text style={styles.TextStyle}> {"Thêm " + String(quantity * item.priceNum) + "đ"} </Text>
          </TouchableOpacity>
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
      height: 200,   
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
    productIntro: {
      flex: 1,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
    },
    note: {
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
      fontSize: 20,
    },
    selection: {
      color: 'blue',
      fontSize: 15
    },
    quanitySelect: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#e3e3e3',
      width: 130,
    },
    quanityButton: {
      width: 35,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#d1d1d1',
    },
    butonText: {
      fontSize: 18,
    },
    quantity: {
      color: '#007eb9',
    },
    button: {
      backgroundColor:'#0e46ed',
      borderColor: '#fff',
      alignItems: 'center',
      alignSelf: 'auto',
      borderRadius: 20,
    },
    TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 17,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
  });
export default ProductDetail;
