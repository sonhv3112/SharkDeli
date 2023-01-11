import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const DetailShipper = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Header}>
                  <Text style={{fontSize:24, fontWeight:'bold', color:'black'}}>Đơn hàng #37462</Text>
            </View>
            <ScrollView style={{marginBottom: 15, }}>
            <View style={styles.profile}>
                <View style={{flex:3}}>
                <Image source={require('../../assets/img.jpg')} resizeMode="cover" style={styles.image}/>
                </View>
                <View style={{flex:5}}>
                    <Text style={styles.name}>Trần Khánh An</Text>
                    <Text>0928972288</Text>
                    <Text>Bún nước cô có:</Text>
                    <Text>25 Phan Đình Phùng, Phú Nhuận</Text>
                    <Text>Địa chỉ khách:</Text>
                    <Text>252 Nguyễn Văn Cừ, q5, TP Hồ Chí Minh</Text>
                </View>
            </View>
            <View>
            <Image source={require('../../assets/grab.png')} resizeMode="cover" style={styles.image}/>
            </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{marginLeft:40, marginTop: 40, backgroundColor: '#FFF9C7', width: 130, height: 50, alignItems: 'center', justifyContent:'center', borderWidth: 1, borderRadius: 10}}>
                <View style={{flexDirection: 'row'}}>
                <Feather name='phone-call' size={20} color='black'/>
                <Text style={{marginLeft:5}}>Gọi khách</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:30, marginTop: 40, backgroundColor: '#FFF9C7', width: 130, height: 50, alignItems: 'center', justifyContent:'center', borderWidth: 1, borderRadius: 10}}>
                            <View style={{flexDirection: 'row'}}>
                            <MaterialCommunityIcons name='message-text-outline' size={20} color='black'/>
                            <Text style={{marginLeft:5}}>Nhắn tin</Text>
                            </View>
                        </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={{marginTop: 30, backgroundColor: '#B8FF9F', width: 200, height: 50, alignItems: 'center', justifyContent:'center', borderWidth: 1, borderRadius: 10}}>
            <Text style={{fontWeight:'bold'}}>Giao hàng thành công !</Text>
            </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={{marginTop: 20, backgroundColor: '#FF7373', width: 200, height: 50, alignItems: 'center', justifyContent:'center', borderWidth: 1, borderRadius: 10}} onPress={() => navigation.navigate('BoomDealReport')}>
                <Text style={{fontWeight:'bold'}}>Báo cáo bom hàng !</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  Header:{
  backgroundColor: '#FFE3C2',
  alignItems: 'center',
  justifyContent: 'center',
  height:60,
  },
  titl:{
    marginTop: 20,
    fontWeight: '400',
    fontSize: 20,
    color:'black'
  },
  cont:{
    marginTop: 10,
    fontSize: 15,
    color:'black'
  },
  name:{
    marginTop: 15,
    fontSize: 18,
    color: 'black',
    fontWeight: '450',
  },
  detail:{
    marginTop:10,
    fontSize: 15,
    color:'black',
  },
  wr:{
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: '#FF7373',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 70,
  },
  acc:{
      height: 80,
      width: 80,
      borderRadius: 80,
      backgroundColor: '#B8FF9F',
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 100,
    },
    image: {
        height: 130,   // height and width as per you content
        width: '100%',
        resizeMode: 'contain',
        top: 0,
        marginTop: 30,
     },
     imageMain: {
        height: 3000,   // height and width as per you content
        width: '150%',
        resizeMode: 'contain',
        top: 0,
        marginTop: 30,
     },
    profile:{
    flexDirection: 'row',
    height: 200,
    width: 300,
    backgroundColor: '#FFF9C7',
    marginLeft: 45,
    marginTop: 40,
    justifyContent: 'center',
    paddingTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    }
});

export default DetailShipper;
