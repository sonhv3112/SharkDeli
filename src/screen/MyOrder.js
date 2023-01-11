import React, { useContext, useEffect, useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, SafeAreaView, Dimensions, Alert, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Header = (props) => { 
    return (
        <View style={{padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                <MaterialIcons name='arrow-back' size={25} color='#000' backgroundColor='#fff'/>
            </TouchableOpacity>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18, }}>Đơn hàng của tôi</Text>
            <TouchableOpacity onPress={()=>{ console.log(123); props.navigation.goBack(); }} >
                <MaterialIcons name='chat' size={25} color='#00A4E3'/>
            </TouchableOpacity>
        </View>
    );
}

const StatusBar = (props) => { 
    console.log(props); 

    return (
        <View style={{paddingLeft: 15, flexDirection: 'row', marginTop: 5, backgroundColor: '#fff', paddingTop: 8, paddingBottom: 8}}>
            <TouchableOpacity style={{...styles.statusItem, backgroundColor: props.status == 1 ? '#00A6E4' : '#fff', }} onPress={() => props.setStatus(1)}>
                <Text style={{fontSize: 15, color: props.status == 1 ? 'white' : 'black'}}>Đang giao</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.statusItem, backgroundColor: props.status == 2 ? '#08b13c' : '#fff', }} onPress={() => props.setStatus(2)}>
                <Text style={{fontSize: 15, color: props.status == 2 ? 'white' : 'black'}}>Đã giao</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.statusItem, backgroundColor: props.status == 3 ? '#e93330' : '#fff', }} onPress={() => props.setStatus(3)}>
                <Text style={{fontSize: 15, color: props.status == 3 ? 'white' : 'black'}}>Đã hủy</Text>
            </TouchableOpacity>
        </View>
    ); 
}

const OrderItem = (props) => { 
    return (
        <TouchableOpacity style={{backgroundColor: '#fff', padding: 15, marginTop: 10, }} onPress={props.onPress}>
            <Text style={{color: '#01A6E4', fontWeight: 'bold', fontSize: 16, }}>{props.shop}</Text>
            <View style={{borderTopWidth: 1, borderColor: '#efefef', marginTop: 7, }}/>
            <View style={{flexDirection: 'row', paddingLeft: 15, paddingRight: 15, marginTop: 7, }}>
                <Text style={{marginRight: 25, }}>{props.items[0].num + 'x'}</Text>
                <View style={{flexDirection: 'column'}}>
                    <Text style={{color: 'black'}}>{props.items[0].type}</Text>
                    <Text>{'Size ' + props.items[0].size + ',' + props.items[0].topping}</Text>
                </View>
                <Text style={{color: '#111', marginLeft: 'auto'}}>{String(props.items[0].price * props.items[0].num) + 'đ'}</Text>
            </View>
            <View style={{borderTopWidth: 1, borderColor: '#efefef', marginTop: 7, }}/>
            {
                props.items.length > 1  ? 
                    <>
                        <Text style={{marginTop: 5, color: '#9F9A97', marginLeft: 'auto', marginRight: 'auto'}}>{'+ ' + String(props.items.length - 1) + ' món'}</Text>
                        <View style={{borderTopWidth: 1, borderColor: '#efefef', marginTop: 7, }}/>
                    </>
                 : 
                    <>
                    </>
            }
            <View style={{flexDirection: 'row', paddingLeft: 15, paddingRight: 15, marginTop: 7, }}>
                <Text>{props.items.length + ' món'}</Text>
                <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 'auto', marginRight: 20, }}>Thành tiền</Text>
                <Text style={{color: 'black', fontWeight: 'bold',}}>{props.items.reduce((total, item) => total + item.num * item.price, 0) + 'đ'}</Text>
            </View>
            <View style={{borderTopWidth: 1, borderColor: '#efefef', marginTop: 7, }}/>
            <View style={{paddingLeft: 15, paddingRight: 15, marginTop: 7, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: props.textStatusColor}}>{props.status}</Text>
                <MaterialIcons name='arrow-forward-ios' size={16} color='#9F9A97' style={{marginLeft: 'auto'}}/>
            </View>
        </TouchableOpacity>
    );
}

const MyOrder = ({navigation, route}) => {
    const [status, setStatus] = useState(1);

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <StatusBar status={status} setStatus={setStatus}/>
            <ScrollView>
            {
                status == 1 ? 
                    <>
                        <OrderItem 
                            shop='Trà Sữa Thế Giới' 
                            items={[
                                {
                                    num: 1, 
                                    type: 'Trà sữa khoai môn', 
                                    size: 'L', 
                                    topping: 'Thạch trái cây', 
                                    price: 20000, 
                                }, 
                                {
                                    num: 1, 
                                    type: 'Trà sữa khoai môn', 
                                    size: 'L', 
                                    topping: 'Thạch trái cây', 
                                    price: 20000, 
                                }
                            ]}
                            status='Đang chờ người bán xác nhận'
                            textStatusColor='#00A6E4'
                            // onPress={() => navigation.navigate('Comment')}
                        />  
                        
                        <OrderItem 
                            shop='Trà Sữa Thế Giới' 
                            items={[
                                {
                                    num: 1, 
                                    type: 'Trà sữa khoai môn', 
                                    size: 'L', 
                                    topping: 'Thạch trái cây', 
                                    price: 20000, 
                                }, 
                                {
                                    num: 1, 
                                    type: 'Trà sữa khoai môn', 
                                    size: 'L', 
                                    topping: 'Thạch trái cây', 
                                    price: 20000, 
                                }
                            ]}
                            status='Đang chờ người bán xác nhận'
                            textStatusColor='#00A6E4'
                            // onPress={() => navigation.navigate('Comment')}
                        />  
                        
                        <OrderItem 
                            shop='Trà Sữa Thế Giới' 
                            items={[
                                {
                                    num: 1, 
                                    type: 'Trà sữa khoai môn', 
                                    size: 'L', 
                                    topping: 'Thạch trái cây', 
                                    price: 20000, 
                                }, 
                                {
                                    num: 1, 
                                    type: 'Trà sữa khoai môn', 
                                    size: 'L', 
                                    topping: 'Thạch trái cây', 
                                    price: 20000, 
                                }
                            ]}
                            status='Đang chờ người bán xác nhận'
                            textStatusColor='#00A6E4'
                            // onPress={() => navigation.navigate('Comment')}
                        />  
                    </> 
                    : status == 2 ?
                    <>
                        <OrderItem 
                            shop='Phúc Long - Nguyễn Thị Minh Khai' 
                            items={[
                                {
                                    num: 2, 
                                    type: 'Trà sữa không đường', 
                                    size: 'M', 
                                    topping: 'Thạch trái cây, trân châu đường đen', 
                                    price: 50000, 
                                }, 
                                {
                                    num: 2, 
                                    type: 'Trà sữa khoai môn', 
                                    size: 'L', 
                                    topping: 'Thạch trái cây', 
                                    price: 50000, 
                                }
                            ]}
                            status='Đánh giá để nhận xu'
                            textStatusColor='#F25C05'
                            onPress={() => navigation.navigate('Comment')}
                        />  
                    </>
                    :
                    <>
                        <OrderItem 
                            shop='Trà Sữa Thế Giới' 
                            items={[
                                {
                                    num: 1, 
                                    type: 'Trà sữa khoai môn', 
                                    size: 'L', 
                                    topping: 'Thạch trái cây', 
                                    price: 20000, 
                                }, 
                                {
                                    num: 1, 
                                    type: 'Trà sữa khoai môn', 
                                    size: 'L', 
                                    topping: 'Thạch trái cây', 
                                    price: 20000, 
                                }
                            ]}
                            status='Đã hủy'
                            textStatusColor='#e93330'
                            onPress={() => navigation.navigate('Comment')}
                        />  
                    </>
            }
            </ScrollView>
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