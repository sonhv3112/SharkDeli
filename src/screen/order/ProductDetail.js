import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { SafeAreaView, StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, ScrollView, Image, Pressable, ImageBackground} from 'react-native';
import { Card, Button, Title, Paragraph, TextInput, RadioButton, Divider, IconButton, Checkbox } from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const size = ['M', 'L']
const topping = ['Trân châu đen', 'Trân châu trăng', 'Thạch trái cây', 'Trân châu thủy tinh']
const PriceNum = 30000

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

function ProductDetail({navigation, route}) {
  const [quantity, setQuantity] = useState(1)
  const onMinus = () => {
    setQuantity(Math.max(1,quantity-1))
  };

  const onPlus = () => {
    setQuantity(quantity+1)
  };

  const CheckBoxItem = (probs) => {
    const [checked, setChecked] = React.useState(false);
  
    return (
      <TouchableOpacity
      onPress={
        () => {
          setChecked(!checked)
          //probs.checked = checked
        }
      }>
        <View style={styles.checkboxItemContainer}>

          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            style={styles.checkboxIcon}
            color='blue'
            />
          <View style={{...styles.sectionContainer, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{...styles.checkboxItemContent, }}>{probs.content}</Text>
            <Text style={{...styles.checkboxItemContent, textAlign: 'center', }}>5.000đ</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const RadioButtonGroup = (props) => {
    // props.items
    // props.checked
  
    const [checked, setChecked] = useState(0);
  
  
    return (
      <View style={{padding: 10, width: '100%',}}>
        {props.items.map( (content, index) => 
          <TouchableOpacity 
            style={{flexDirection: 'row', alignItems: 'center', width: '100%', }}
            onPress={() => {
              setChecked(index);
              //props.checked = index;
            }}>
            <RadioButton
              color={'blue'}
              value={index}
              status={checked==index? 'checked': 'unchecked'}
              onPress={() => {
                setChecked(index);
                //props.checked = index;
              }}
            />
            <View style={{...styles.sectionContainer, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{...styles.radiobuttonItemContent, }}>{content}</Text>
            <Text style={{...styles.radiobuttonItemContent, textAlign: 'center', backgroundColor: 'transparent'}}> 5.000đ</Text>
          </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  //const item = route.params.propItem; 
  item =  Tea[0]
  return (
    <ScrollView style={{...styles.sectionContainer, paddingLeft: 15, paddingRight: 15}}>
      <ImageBackground source={require('../../../IMG/Tea.jpg')} resizeMode="cover" style={styles.image}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <TouchableOpacity style={{}} onPress={()=>navigation.goBack()}>
                <AntDesign name='arrowleft' style={{fontSize:22, marginRight:20,paddingTop: 10, marginLeft:10}}></AntDesign>
            </TouchableOpacity>
          </View>
      </ImageBackground>

      <View style={{...styles.sectionContainer, flexDirection: 'row'}}>
        <Text style={styles.sectionTitle}>{item.name}</Text>
        <Text style={{...styles.sectionContent, flex: 1, textAlign: 'right', fontSize: 20}}>{item.price}</Text>
      </View>

      <Text style={styles.sectionContent}> Trà đào với cam, không có xả </Text>
      <View style={{...styles.sectionContainer, flexDirection: 'row', alignItems: 'center', padding: 0}}>
          <MaterialCommunityIcons  name='note-edit-outline' size={20} color='blue'/>
          <TextInput 
            style={{...styles.textinput, width: '100%'}} 
            selectionColor='blue'
            placeholder={"Ghi chú cho nhà hàng"}
            underlineColor='transparent'
            />
      </View>

      <View>
        <View style={styles.sectionContainer}>
          <Text style={{...styles.sectionTitle}}> Chọn size </Text>
          <View style={{...styles.sectionContainer, borderWidth: 1, borderColor: 'silver', padding: 1}}>
            <View style={styles.sectionContainer}>
              <View style={{...styles.sectionContainer, flexDirection: 'row', padding: 1}}>
                <RadioButtonGroup 
                  items={size}
                  //checked={props.checked}
                />
              </View>
            </View>
          </View>
          <Text style={{...styles.sectionTitle}}> Chọn topping </Text>
          <View style={{...styles.checkboxContainer, borderWidth: 1, borderColor: 'silver', padding: 5}}>
          {topping.map( (content, index) => 
            <CheckBoxItem 
              content={content} 
              //checked={props.reasons[index]}
              />)}
        </View>
        </View>
      </View>

      <View style={{...styles.sectionContainer, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.quanitySelect}>
          <Pressable onPress={onMinus} style={styles.quanityButton}>
            <Text style={styles.sectionContent}>-</Text>
          </Pressable>
          <Text style={{...styles.quantity, color: 'black'}}>{quantity}</Text>

          <Pressable onPress={onPlus} style={styles.quanityButton}>
            <Text style={styles.butonText}>+</Text>
          </Pressable>
        </View>
       
        <View style={styles.buyButton}>
          <Button 
            mode='contained' 
            onPress={() => { navigation.goBack(); } }
            compact={true}
            buttonColor='cyan'
            textColor='white'
            labelStyle={{fontSize: 17}}
            >
              {"Thêm " + String(quantity * item.priceNum) + "đ"}
          </Button>
        </View>
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
    width: '50%',
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
export default ProductDetail;
