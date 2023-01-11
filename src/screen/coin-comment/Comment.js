import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { SafeAreaView, StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, ScrollView, Image, Pressable} from 'react-native';
import { Card, Button, Title, Paragraph, TextInput, RadioButton, Divider, IconButton, Checkbox, Switch } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';

function Comment({navigation, route}) { 

    const [starCnt, UpdStar] = useState(5)

    const MySwitch = () => {
        const [isSwitchOn, setIsSwitchOn] = React.useState(false);
      
        const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
      
        return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
      };

  return (
    <View style={{padding: 15, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', }}>
            <TouchableOpacity style={{position: 'absolute', left: 0, }} onPress={()=>navigation.goBack()}>
                <AntDesign name='arrowleft' style={{fontSize:22, }} color='black'></AntDesign>
            </TouchableOpacity>
            <Text style={{...styles.sectionTitle, }}> Đánh Giá </Text>
        </View>
        <View style={{...styles.sectionContainer}}>
            <TouchableOpacity style={{flex: 1}} onPress={()=>navigation.goBack()}>
                <AntDesign name='arrowleft' style={{fontSize:22, marginRight:20,paddingTop: 10, marginLeft:10}} color='black'></AntDesign>
            </TouchableOpacity>
            <Text style={{...styles.sectionTitle, textAlign: 'left', flex: 6}} numberOfLines={1}> Phúc Long - Nguyễn Thị Minh Khai </Text>
        </View>
        <Text style={{...styles.sectionTitle, paddingBottom: 20}}> Phúc Long - Nguyễn Thị Minh Khai</Text>
        <View style={{...styles.sectionContainer, justifyContent: 'center', alignItems: 'center'}}>
            <StarRating
                rating={starCnt}
                onChange={UpdStar}
                alignSelf={'center'}
                fontSize={25}
            />
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}> Nhận xét </Text>
        </View>
        <View style={{...styles.sectionContainer, flexDirection: 'row', alignItems: 'center', padding: 0}}>
            <MaterialCommunityIcons  name='note-edit-outline' size={20} color='blue'/>
            <TextInput 
                style={{...styles.textinput, width: '85%', backgroundColor: 'white'}} 
                selectionColor='blue'
                placeholder={"Ghi chú cho nhà hàng"}
                underlineColor='transparent'
                />
        </View>

        <View style={{...styles.sectionContainer, flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', flex: 1}}>
                <MaterialCommunityIcons name='incognito' size={20} color='black'/>
                <Text style={{...styles.sectionContent}}>  Nhận xét ẩn danh </Text>
            </View>
            {MySwitch()}
        </View>

        <View style={{...styles.sectionContainer, flexDirection: 'row', paddingTop: 20}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{...styles.sectionContent}}> Xu nhận được </Text>
            <Text style={{...styles.sectionTitle, fontSize:25}}> <MaterialIcons name='monetization-on' size={25} color='yellow'/> 200</Text>
          </View>
          <View style={{...styles.buyButton, flex: 2}}>
            <Button 
              mode='contained' 
              onPress={() => console.log('buy')}
              compact={true}
              buttonColor='#e27602'
              textColor='white'
              labelStyle={{fontSize: 17}}
              >
                {"Gửi"}
            </Button>
          </View>
        </View>
        <TouchableOpacity style={{...styles.sectionContainer, flexDirection: 'row', alignItems: 'center', padding: 0}} onPress={() => navigation.navigate('StoreReport')}>
            <MaterialIcons name='report' size={20} color='red'/>
            <Text style={{marginLeft: 10, fontSize: 16, color: 'red', }}>Báo cáo nhà hàng</Text> 
        </TouchableOpacity>
    </View> 
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
export default Comment;
