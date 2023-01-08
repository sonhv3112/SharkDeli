import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SafeAreaView, StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Card, Button, Title, Paragraph, TextInput, RadioButton, Divider, IconButton, Checkbox } from 'react-native-paper';
import { useFormik } from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FlatList, State } from 'react-native-gesture-handler';

const dimensions = Dimensions.get('window');
const iconSize = Math.round(dimensions.height * 0.07)- 10;

const stories = [
  {
    id: 0,
    id_order: 'DH_JSKJFDEICM',
    title: 'Combo Gà Rán',
    content: 'Combo gà rán King: 1 đùi gà + 1 nước + 1 hambuger',
    old_price: 95000,
    new_price: 80000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/0.png')
  },
  {
    id: 1,
    id_order: 'DH_JDVJRJEKDD',
    title: 'Trà Vải Phúc Long',
    content: 'Trà nhài vải Size L',
    old_price: 55000,
    new_price: 40000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/1.png')
  },
  {
    id: 2,
    id_order: 'DH_FFFDESVNFK',
    title: 'Bún Riêu Quán Hương',
    content: 'Bún riêu đầy đủ: Thịt xào, mọc giòn, chả, riêu cua, tóp mỡ',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/2.png')
  },
  {
    id: 3,
    id_order: 'DH_KJHUSNMROS',
    title: 'Lẩu Bò Nhà Gỗ',
    content: '300 gram bò, rau, củ, bún, mì',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/3.png')
  },
  {
    id: 4,
    id_order: 'DH_FFFDSVNFK',
    title: 'Bún Riêu Quán Hương',
    content: 'Bún riêu đầy đủ: Thịt xào, mọc giòn, chả, riêu cua, tóp mỡ',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/2.png')
  },
  {
    id: 5,
    id_order: 'DH_KJHUSMROS',
    title: 'Lẩu Bò Nhà Gỗ',
    content: '300 gram bò, rau, củ, bún, mì',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/3.png')
  },
  {
    id: 6,
    id_order: 'DH_FFFDSVNFK',
    title: 'Bún Riêu Quán Hương',
    content: 'Bún riêu đầy đủ: Thịt xào, mọc giòn, chả, riêu cua, tóp mỡ',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/2.png')
  },
  {
    id: 7,
    id_order: 'DH_KJHUSMROS',
    title: 'Lẩu Bò Nhà Gỗ',
    content: '300 gram bò, rau, củ, bún, mì',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/3.png')
  }
]

const message = {
    title: 'Giải cứu hàng bom',
    discribe: 'Mỗi ngày có trung bình 30 - 40 đơn hàng bị bom, hãy cùng chúng tôi giúp đỡ các tài xế',
    detail_button: 'Mua ngay',
    img: require('../../../assets/BoomDealIntro/illustration.png')
}

// Utility function to format price number
Number.prototype.format = function(n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

const formatPrice = (price, unit) => {
return price.format() + unit;
}
//////////////////////////////////////////

const Header = (props) => {
    return (
        <View style={styles.header}>
        <TouchableOpacity onPress={props.onPress} style={styles.iconButton}>
            <MaterialIcons name='arrow-back' size={25} color={color.black}/>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>
            {props.title}
            </Text>
        </View>
        </View>
    );
}

const BoomDealListItem = (props) => {
  const { item } = props;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemImageContainer}>
      <Image style={styles.itemImage} source={item.img} resizeMode='contain' />
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text 
          style={styles.itemContent}
          numberOfLines={1}>
          {item.content}
        </Text>
        <View style={styles.itemPriceRow}>
          <View style={styles.itemPrice}>
            <Text style={styles.oldPrice}>{formatPrice(item.old_price, item.unit)}</Text>
            <Text style={styles.newPrice}>{formatPrice(item.new_price, item.unit)}</Text>
          </View>
          <View style={styles.itemBuyButton}>
            <Button 
              mode='contained' 
              onPress={() => props.onDetailButtonPress(item)}
              compact={true}
              buttonColor={color.blue}
              textColor={color.white}
              style={styles.itemBuyButton}
              labelStyle={styles.itemBuyButton}>
              {message.detail_button}
          </Button>
          </View>
          
        </View>
      </View>
    </View>
    
  );
  
}

const onDetailButtonPress = (item) => {
  // TODO: Link to BoomDealDetail Screen
  console.log('Pressed ' + item.title);
}

const Body = (props) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.introContainer}>
        <View style={styles.introContent}>
          <Text style={styles.introTitle}>{message.title}</Text>
          <Text style={styles.introDescribe}>{message.discribe}</Text>
        </View>

        <View style={styles.introIllutration}>
          <Image 
            source={message.img}
            style={styles.introImage}
          /> 
        </View>
      </View>

    
      <FlatList
        data={stories}
        contentContainerStyle={styles.gridContainer}
        numColumns={2}
        renderItem={({item}) => 
        <View style={styles.gridItemWrapper}>
          <BoomDealListItem 
            item={item}
            onDetailButtonPress={onDetailButtonPress}
          />
        </View>}
        keyExtractor={(item, index) => item.id}
      />
    </SafeAreaView>
  )
}

export default BoomDealIntro = ({navigation}) => {

  const onBackButtonPress = () => {
    // TODO: Return previous screen
    console.log('Pressed Back');
  }
    
  console.log("loading")

  return (
    <View style={styles.container}>
      <Header onPress={onBackButtonPress} title={message.title}/>
      <Body />
      
    </View>
  );
}

const color = {
  black: '#000000',
  lightgrey: '#f9f9f9',
  grey: '#5B5F62',
  red: '#e93330',
  white: '#ffffff',
  blue: '#00a6e4',
  green: '#08b13c',
  lightyellow: '#fff9e7'
};
  
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: iconSize,
    width: '100%',
    backgroundColor: color.white,
    alignItems: 'center'
  },

  iconButton: {
    alignItems: 'center',
    margin: 10,
  },

  headerTitle: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: color.black
  },

  headerTitleContainer: {
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: color.lightgrey
  },

  body: {
    flexDirection: 'column'
  },

  introContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: color.lightyellow,
    alignItems: 'flex-start'
  },

  introContent: {
    flex: 3
  },

  introIllutration: {
    padding: 10,
    paddingRight: 20,
    flex: 1
  },

  introTitle: {
    color: color.black,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10
  },

  introDescribe: {
    color: color.grey,
    fontSize: 14
  },

  introImage: {
    width: 100,
    height: 100
  },

  gridContainer: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    paddingBottom: 200 // IDK why FlatList is so stupid :<
  },


  gridItemWrapper: {
    flex: 1,
    paddingHorizontal: 4
  },

  itemContainer: {
    marginBottom: 8,
    borderRadius: 4,
    backgroundColor: color.white,
    // overflow: 'hidden',
    flexDirection: 'column',
  },

  itemInfo: {
    padding: 8
  },

  itemImageContainer: {
    alignItems: 'center',
    flexDirection: 'column'
  },

  itemImage: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    height: 100,
    width: '100%',
  },

  itemTitle: {
    fontSize: 15,
    color: color.black
  },

  itemContent: {
    fontSize:12,
    color: color.grey,
    marginBottom: 10
  },

  itemPriceRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  itemPrice: {
    flexDirection: 'column',
    flex: 6,
    alignItems: 'flex-start'
  },

  oldPrice: {
    fontSize: 12,
    color: color.red,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },

  newPrice: {
    fontSize: 12,
    color: color.green
  },

  itemBuyButton: {
    fontSize: 13,
    flex: 8,
    height: 30,
    justifyContent: 'center',
    textAlignVertical: 'center'
  },
});