import React, { useContext, useEffect } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, SafeAreaView, Dimensions, Alert, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Header = (props) => { 
    return (
        <View style={{padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                <MaterialIcons name='arrow-back' size={25} color='#000' backgroundColor='#fff'/>
            </TouchableOpacity>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18, }}>Đơn hàng của tôi</Text>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                <MaterialIcons name='chat' size={25} color='#00A4E3'/>
            </TouchableOpacity>
        </View>
    );
}

const StatusBar = (props) => { 
    return (
        <View style={{paddingLeft: 15, flexDirection: 'row', marginTop: 5, backgroundColor: '#fff', paddingTop: 8, paddingBottom: 8}}>
            <TouchableOpacity style={{...styles.statusItem, backgroundColor: '#00A6E4'}}>
                <Text style={{fontSize: 15, color: 'white'}}>Đang giao</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.statusItem}}>
                <Text style={{fontSize: 15, color: 'black'}}>Đã giao</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.statusItem}}>
                <Text style={{fontSize: 15, color: 'black'}}>Đã hủy</Text>
            </TouchableOpacity>
        </View>
    ); 
}

const OrderItem = (props) => { 
    return (
        <TouchableOpacity style={{backgroundColor: '#fff', padding: 15, marginTop: 10, }}>
            <Text style={{color: '#01A6E4', fontWeight: 'bold', fontSize: 16, }}>{props.shop}</Text>
            <View style={{borderTopWidth: 1, borderColor: '#efefef', marginTop: 7, }}/>
            <View style={{flexDirection: 'row'}}>
                <Text>{props.</Text>
            </View>
            <View style={{borderTopWidth: 1, borderColor: '#efefef', marginTop: 7, }}/>
        </TouchableOpacity>
    );
}

const MyOrder = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <StatusBar/>
            <OrderItem shop='Trà Sữa Thế Giới' /> 
        </SafeAreaView>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
        backgroundColor: '#F9F9F9',
        // padding: 15, 
    },
    statusItem: { 
        paddingTop: 5, 
        paddingBottom: 5, 
        borderRadius: 100, 
        borderColor: 'grey', 
        borderWidth: 1, 
        width: 110, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: 5, 
        marginRight: 5,
    }
});

export default MyOrder; 