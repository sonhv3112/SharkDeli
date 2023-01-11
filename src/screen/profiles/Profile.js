import React from 'react';
import { StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, ScrollView, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CoinIcon from '../../../assets/Profile/coin.svg';
import Icon0 from '../../../assets/Profile/bill.svg';
import Icon1 from '../../../assets/Profile/heart_add.svg';
import Icon2 from '../../../assets/Profile/location.svg';
import Icon3 from '../../../assets/Profile/voucher.svg';
import Icon4 from '../../../assets/Profile/wallet.svg';
import Icon5 from '../../../assets/Profile/noti.svg';
import Icon6 from '../../../assets/Profile/rocket.svg';
import Icon7 from '../../../assets/Profile/evaluate.svg';
import Icon8 from '../../../assets/Profile/policy.svg';
import Icon9 from '../../../assets/Profile/chevron_right.svg';
import Logo from '../../../assets/Profile/logo.svg';

const dimensions = Dimensions.get('window');
const iconSize = Math.round(dimensions.height * 0.07)- 10;
const buttonIconSize = 25;

const stories = {
    id_user: 'MH_SMFEJCKSKFMD',
    name: 'Lee Min-ho',
    status: 'Thành viên',
    coin: 0,
    profile_picture: require('../../../assets/Profile/default.png')
}

const message = {
  title: 'Tài khoản',
  buttons: [
    {
      id: 0,
      title: 'Đơn hàng',
      icon: Icon0
    },
    {
      id: 1, 
      title: 'Yêu thích',
      icon: Icon1
    },
    {
      id: 2,
      title: 'Vị trí',
      icon: Icon2
    },
    {
      id: 3,
      title: 'Mã giảm giá đã lưu',
      icon: Icon3
    },
    {
      id: 4,
      title: 'Quản lý thanh toán',
      icon: Icon4
    },
    {
      id: 5,
      title: 'Cài đặt thông báo',
      icon: Icon5
    },
    {
      id: 6,
      title: 'Tính năng mở rộng',
      icon: Icon6
    },
    {
      id: 7,
      title: 'Đánh giá SHARKDELI',
      icon: Icon7
    },
    {
      id: 8,
      title: 'Điều khoản và Chính sách',
      icon: Icon8
    },
    {
      id: 9,
      title: 'Phiên bản hiện tại: v1.0',
      icon: Icon9
    }
  ]
}


// Utility function to format price number
Number.prototype.format = function(n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

const formatCoin = (coin) => {
  return coin.format() + ' xu';
}

const alert = (msg) => {
  Alert.alert(msg);
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
          {message.title}
        </Text>
      </View>
    </View>
  );
}

const Body = (props) => {

  return (
    <ScrollView style={styles.body}>
      <TouchableOpacity 
        style={styles.accountInfoContainer}
        onPress={() => {alert('Pressed ShowAccount')}}>
        <View style={styles.profilePictureShadow}>
          <Image style={styles.profilePicture} source={stories.profile_picture}/>

        </View>
        <View style={styles.nameColumn}>
          <Text style={styles.name} numberOfLines={1}>{stories.name}</Text>
          <View style={styles.statusRow}>
            <Text style={styles.status}>{stories.status}</Text>
            <View style={styles.coinRow}>
              <CoinIcon height={20} width={20} />
              <Text style={styles.coin}>{formatCoin(stories.coin)}</Text>
            </View>
            
          </View>
        </View>
        <MaterialIcons name='chevron-right' size={40} color={color.white}/>
      </TouchableOpacity>

      <View style={styles.rowSectionContainer}>
        <TouchableOpacity
          style={styles.rowButtonContainer}
          onPress={() => { props.navigation.navigate('MyOrder') }}>
          <Icon0 width={1.5*buttonIconSize} height={1.5*buttonIconSize} fill={color.green} style={styles.buttonIcon}/>
          <Text style={styles.buttonContent}>{message.buttons[0].title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowButtonContainer}
          onPress={() => {alert('Pressed Loves')}}>
          <Icon1 width={1.5*buttonIconSize} height={1.5*buttonIconSize} fill={color.red} style={styles.buttonIcon}/>
          <Text style={styles.buttonContent}>{message.buttons[1].title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowButtonContainer}
          onPress={() => {alert('Pressed Location')}}>
          <Icon2 width={1.5*buttonIconSize} height={1.5*buttonIconSize} fill={color.blue} style={styles.buttonIcon}/>
          <Text style={styles.buttonContent}>{message.buttons[2].title}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.columnSectionContainer}>
        <TouchableOpacity
          style={styles.columnButtonContainer}
          onPress={() => {alert('Pressed Voucher')}}>
          <Icon3 width={buttonIconSize} height={buttonIconSize} fill={color.black} style={styles.buttonIcon}/>
          <Text style={styles.buttonContent}>{message.buttons[3].title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.columnButtonContainer}
          onPress={() => {alert('Pressed Wallet')}}>
          <Icon4 width={buttonIconSize} height={buttonIconSize} fill={color.black} style={styles.buttonIcon}/>
          <Text style={styles.buttonContent}>{message.buttons[4].title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.columnButtonContainer}
          onPress={() => {alert('Pressed Notification Setting')}}>
          <Icon5 width={buttonIconSize} height={buttonIconSize} fill={color.black} style={styles.buttonIcon}/>
          <Text style={styles.buttonContent}>{message.buttons[5].title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.columnButtonContainer}
          onPress={() => {alert('Pressed Features')}}>
          <Icon6 width={buttonIconSize} height={buttonIconSize} fill={color.black} style={styles.buttonIcon}/>
          <Text style={styles.buttonContent}>{message.buttons[6].title}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.columnSectionContainer}>
        <TouchableOpacity
          style={styles.columnButtonContainer}
          onPress={() => {alert('Pressed Evaluating')}}>
          <Icon7 width={buttonIconSize} height={buttonIconSize} fill={color.black} style={styles.buttonIcon}/>
          <Text style={styles.buttonContent}>{message.buttons[7].title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.columnButtonContainer}
          onPress={() => {alert('Pressed Terms and Privacy')}}>
          <Icon8 width={buttonIconSize} height={buttonIconSize} fill={color.black} style={styles.buttonIcon}/>
          <Text style={styles.buttonContent}>{message.buttons[8].title}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.columnSectionContainer}>
        <TouchableOpacity
          style={styles.columnButtonContainer}
          onPress={() => {alert('Pressed About us')}}>
          <Text style={styles.buttonContent}>{message.buttons[9].title}</Text>
          <Icon9 width={buttonIconSize} height={buttonIconSize} fill={color.black} style={styles.buttonIcon}/>
        </TouchableOpacity>
      </View>

      <Footer/>
    </ScrollView>
  )
}

const Footer = () => {
    return (
      <View style={styles.footer}>
        <Logo height={150} />
      </View>
    );
  }


export default Profile = ({navigation}) => {
  const onBackButtonPress = () => {
    // // TODO: Return previous screen
    // console.log('Pressed Back');
    navigation.goBack();
  }
    
  console.log("loading");

  return (
    <View style={styles.container}>
      <Header onPress={onBackButtonPress}/>
      <Body navigation={navigation}/>
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
  lightyellow: '#fff9e7',
  transparent: '#0000'
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

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.black
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: color.lightgrey
  },

  body: {
    flexDirection: 'column'
  },

  accountInfoContainer: {
    backgroundColor: color.blue,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },

  profilePicture: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin: 5
  },

  profilePictureShadow: {
    shadowColor: color.grey,
    borderRadius: 60,
    elevation: 10,
    backgroundColor: color.transparent
    
  },

  nameColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
    paddingHorizontal: 10
  },

  name: {
    fontSize: 30,
    color: color.white,
    // fontWeight: 'bold'
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  status: {
    color: color.blue,
    backgroundColor: color. white,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 11,
    fontWeight: 'bold'
  },

  coinRow: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  coin: {
    paddingLeft: 5,
    fontSize: 15,
    color: color.white
  },

  rowSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
    marginBottom: 15
  },

  columnSectionContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: color.white,
    marginBottom: 15
  },

  rowButtonContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    padding: 10
  },

  columnButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },

  buttonIcon: {
    margin: 2
  },

  buttonContent: {
    fontSize: 15,
    color: color.black,
    margin: 2,
    flex: 1
  },

  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50
  }
});