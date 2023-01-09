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
    img: require('../../../assets/BoomDealIntro/0.png'),
    id_shop: 'CH_SJNJVJDKKDN',
    name_shop: 'Jolibee Cao Thắng',
    address: 'Phường 4, Quận 5, TP. Hồ Chí Minh',
    id_shipper: 'GH_NSKKDWJFJ',
    name_shipper: 'Trần Hoài Anh',
    time: '20220412120400', //yyyymmddhhmmss format
    reason: 'Tài xế không liên lạc được với khách hàng'
  },
  {
    id: 1,
    id_order: 'DH_JDVJRJEKDD',
    title: 'Trà Vải Phúc Long',
    content: 'Trà nhài vải Size L',
    old_price: 55000,
    new_price: 40000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/1.png'),
    id_shop: 'CH_SJNJVJDKKDN',
    name_shop: 'Phúc Long',
    address: 'Phường 4, Quận 5, TP. Hồ Chí Minh',
    id_shipper: 'GH_NSKKDWJFJ',
    name_shipper: 'Trần Hoài Anh',
    time: '20220412120400', //yyyyMMddhhmmss format
    reason: 'Tài xế không liên lạc được với khách hàng'
  },
  {
    id: 2,
    id_order: 'DH_FFFDESVNFK',
    title: 'Bún Riêu Quán Hương',
    content: 'Bún riêu đầy đủ: Thịt xào, mọc giòn, chả, riêu cua, tóp mỡ',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/2.png'),
    id_shop: 'CH_SJNJVJDKKDN',
    name_shop: 'Jolibee Cao Thắng',
    address: 'Phường 4, Quận 5, TP. Hồ Chí Minh',
    id_shipper: 'GH_NSKKDWJFJ',
    name_shipper: 'Trần Hoài Anh',
    time: '20220412120400', //yyyyMMddhhmmss format
    reason: 'Tài xế không liên lạc được với khách hàng'
  },
  {
    id: 3,
    id_order: 'DH_KJHUSNMROS',
    title: 'Lẩu Bò Nhà Gỗ',
    content: '300 gram bò, rau, củ, bún, mì',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/3.png'),
    id_shop: 'CH_SJNJVJDKKDN',
    name_shop: 'Jolibee Cao Thắng',
    address: 'Phường 4, Quận 5, TP. Hồ Chí Minh',
    id_shipper: 'GH_NSKKDWJFJ',
    name_shipper: 'Trần Hoài Anh',
    time: '20220412120400', //yyyyMMddhhmmss format
    reason: 'Tài xế không liên lạc được với khách hàng'
  },
  {
    id: 4,
    id_order: 'DH_FFFDSVNFK',
    title: 'Bún Riêu Quán Hương',
    content: 'Bún riêu đầy đủ: Thịt xào, mọc giòn, chả, riêu cua, tóp mỡ',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/2.png'),
    id_shop: 'CH_SJNJVJDKKDN',
    name_shop: 'Jolibee Cao Thắng',
    address: 'Phường 4, Quận 5, TP. Hồ Chí Minh',
    id_shipper: 'GH_NSKKDWJFJ',
    name_shipper: 'Trần Hoài Anh',
    time: '20220412120400', //yyyyMMddhhmmss format
    reason: 'Tài xế không liên lạc được với khách hàng'
  },
  {
    id: 5,
    id_order: 'DH_KJHUSMROS',
    title: 'Lẩu Bò Nhà Gỗ',
    content: '300 gram bò, rau, củ, bún, mì',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/3.png'),
    id_shop: 'CH_SJNJVJDKKDN',
    name_shop: 'Jolibee Cao Thắng',
    address: 'Phường 4, Quận 5, TP. Hồ Chí Minh',
    id_shipper: 'GH_NSKKDWJFJ',
    name_shipper: 'Trần Hoài Anh',
    time: '20220412120400', //yyyyMMddhhmmss format
    reason: 'Tài xế không liên lạc được với khách hàng'
  },
  {
    id: 6,
    id_order: 'DH_FFFDSVNFK',
    title: 'Bún Riêu Quán Hương',
    content: 'Bún riêu đầy đủ: Thịt xào, mọc giòn, chả, riêu cua, tóp mỡ',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/2.png'),
    id_shop: 'CH_SJNJVJDKKDN',
    name_shop: 'Quán Hương',
    address: 'Phường 4, Quận 5, TP. Hồ Chí Minh',
    id_shipper: 'GH_NSKKDWJFJ',
    name_shipper: 'Trần Hoài Anh',
    time: '20220412120400', //yyyyMMddhhmmss format
    reason: 'Tài xế không liên lạc được với khách hàng'
  },
  {
    id: 7,
    id_order: 'DH_KJHUSMROS',
    title: 'Lẩu Bò Nhà Gỗ',
    content: '300 gram bò, rau, củ, bún, mì',
    old_price: 58000,
    new_price: 45000,
    unit: 'đ',
    img: require('../../../assets/BoomDealIntro/3.png'),
    id_shop: 'CH_SJNJVJDKKDN',
    name_shop: 'Nhà Gỗ Quán',
    address: 'Phường 4, Quận 5, TP. Hồ Chí Minh',
    id_shipper: 'GH_NSKKDWJFJ',
    name_shipper: 'Trần Hoài Anh',
    time: '20220412120400', //yyyyMMddhhmmss format
    reason: 'Tài xế không liên lạc được với khách hàng'
  }
]

const message = {
  sections: [
    {
        title: 'Người giao hàng'
    },
    {
        title: 'Thời điểm lấy hàng'
    },
    {
        title: 'Lý do trả hàng'
    },
    {
        title: 'Lưu ý.',
        content: 'Đơn hàng chỉ chấp nhận các hình thức thanh toán trả trước'
    }
  ],
    
  buy_button: 'Mua ngay • '
}

// Utility function to format price number
Number.prototype.format = function(n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

const formatPrice = (price, unit) => {
  return price.format() + unit;
}


// Format date, yyyyMMddhhmmss -> hhgmm ngay dd/MM/yyyy 
const formatDate = (date) => {
  return date.slice(8, 10) + 'g' + date.slice(10, 12) 
    + ' ngày ' + date.slice(6, 8) + '/' + date.slice(4, 6) + '/' + date.slice(0, 4);
}
//////////////////////////////////////////

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={props.onPress} style={styles.iconButton}>
        <MaterialIcons name='arrow-back' size={25} color={color.black}/>
      </TouchableOpacity>
    </View>
  );
}

const onShopInfoPress = (id_shop) => {
    // TODO: navigate to ShopInfo screen
    console.log('Shop ' + id_shop);
}

const onShipperInfoPress = (id_shipper) => {
    // TODO: navigate to ShipperInfo screen
    console.log('Shipper ' + id_shipper);
}

const Body = (props) => {
  const {item} = props;

  return (
    <ScrollView style={styles.body}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.img} resizeMode='contain'/>
        </View>

        <View style={styles.sectionContainer}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.price}>
                    <Text style={styles.oldPrice}>
                        {formatPrice(item.old_price, item.unit)}
                    </Text>
                    <Text style={styles.newPrice}>
                        {formatPrice(item.new_price, item.unit)}
                    </Text>
                </View>
            </View>
            <Text style={styles.content}>{item.content}</Text>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => onShopInfoPress(item.id_shop)}>
                <MaterialIcons name='storefront' size={20} color={color.black}/>
                <Text style={styles.shopInfo} numberOfLines={1}>
                    {item.name_shop + ', ' + item.address}
                </Text>
                <MaterialIcons name='chevron-right' size={20} color={color.black}/>
            </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{message.sections[0].title}</Text>
            <TouchableOpacity 
                onPress={() => onShipperInfoPress(item.id_shipper)} 
                style={styles.buttonContainer}> 
                    <Text style={styles.shipperName}>{item.name_shipper}</Text>
                    <MaterialIcons name='chevron-right' size={20} color={color.black}/>
            </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{message.sections[1].title}</Text>
            <Text style={styles.sectionContent}>{formatDate(item.time)}</Text>
        </View>

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{message.sections[2].title}</Text>
            <Text style={styles.sectionContent}>{item.reason}</Text>
        </View>

        <View style={styles.noticeContainer}>
            <Text style={styles.noticeTitle}>{message.sections[3].title}</Text>
            <Text style={styles.noticeContent}>{message.sections[3].content}</Text>
        </View>
    </ScrollView>
  )
}

const Footer = (props) => {
    // props.submitAction
    
    return (
      <View style={styles.footer}>
        <Button 
          mode='contained' 
          onPress={props.onPress}
          compact={true}
          buttonColor={color.green}
          textColor={color.white}
          labelStyle={styles.button}
          >
          {message.buy_button + formatPrice(props.item.new_price, props.item.unit)}
        </Button>
      </View>
    );
  }


export default BoomDealDetail = ({navigation, route}) => {
  // TODO: Render data from id_order...
  const item = route.params.propItem;

  const onBackButtonPress = () => {
    // TODO: Return previous screen
    navigation.goBack(); 
    console.log('Pressed Back');
  }

  const onBuyButtonPress = () => {
    // TODO: Navigate to Payment screen

    console.log('Pressed Buy');
  }
    
  console.log("loading");

  return (
    <View style={styles.container}>
      <Header onPress={onBackButtonPress}/>
      <Body item={item} />
      <Footer item={item} onPress={onBuyButtonPress}/>
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

  image: {
    height: 250,
    width: '100%',
    backgroundColor: color.white
  },

  sectionContainer: {
    backgroundColor: color.white,
    marginBottom: 10,
    padding: 10
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.grey
  },

  sectionContent: {
    fontSize: 15,
    color: color.black,
    paddingVertical: 3
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: color.black
  },

  price: {
    flexDirection: 'column'
  },

  oldPrice: {
    fontSize: 13,
    color: color.red,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },

  newPrice: {
    fontSize: 13,
    color: color.grey
  },

  content: {
    fontSize: 15,
    color: color.grey,
    marginBottom: 10
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },

  shopInfo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: color.black,
    paddingHorizontal: 5,
    flex: 1
  },

  shipperName: {
    fontSize: 15,
    color: color.blue,
    flex: 1
  },

  noticeContainer: {
    marginBottom: 10,
    padding: 10
  },

  noticeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.grey
  },

  noticeContent: {
    fontSize: 15,
    color: color.red,
    paddingVertical: 3
  },

  footer: {
    height: iconSize + 10,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: color.white
  },

  button: {
    fontSize: 17
  }
});