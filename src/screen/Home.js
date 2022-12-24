import React, { useContext, useEffect } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, SafeAreaView, Dimensions, Alert, TouchableOpacity, TextInput } from 'react-native';

import LocationIcon from '../../assets/location.svg';
import ChevronRightIcon from '../../assets/chevron_right.svg';
import MenuIcon from '../../assets/menu.svg'; 
import NotiIcon from '../../assets/noti.svg';
import SearchIcon from '../../assets/search.svg';
import ForwardIcon from '../../assets/forward.svg';

import Icon1 from '../../assets/icon-01.svg'; 
import Icon2 from '../../assets/icon-02.svg'; 
import Icon3 from '../../assets/icon-03.svg'; 
import Icon4 from '../../assets/icon-04.svg'; 
import Icon5 from '../../assets/icon-05.svg'; 
import Icon6 from '../../assets/icon-06.svg'; 
import Icon7 from '../../assets/icon-07.svg'; 
import Icon8 from '../../assets/icon-08.svg'; 
import Icon9 from '../../assets/icon-09.svg'; 
import Icon10 from '../../assets/icon-10.svg'; 
import Icon11 from '../../assets/icon-11.svg'; 
import Icon12 from '../../assets/icon-12.svg';

import { ScrollView } from 'react-native-gesture-handler';

const IconArray = [
    Icon1, Icon2, Icon3, Icon4, 
    Icon5, Icon6, Icon7, Icon8, 
    Icon9, Icon10, Icon11, Icon12, 
];
const DescElement = [
    "Deal hời", "Cơm", "Miến mì", "Fast food", 
    "Đồ uống", "Nước ngoài", "Đặc sản", "Đi chợ", 
    "Hot pick", "Món chay", "Bếp nhà", "Quán quen",
]

const dimensions = Dimensions.get('window');
const iconHeaderSize = Math.round(dimensions.height * 0.07); 

const Header = (props) => { 
    return (
        <View style={{...props.style, flexDirection: 'row', height: iconHeaderSize, width: '100%', paddingLeft: 10, alignItems: 'center'}}>
            <LocationIcon width={iconHeaderSize - 10} height={iconHeaderSize - 10} fill='#01A5E4'/>
            <Text numberOfLines={1} style={{width: '45%', marginLeft: 10, fontSize: 16, color: '#000'}}>
                39 Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Minh
            </Text>
            <ChevronRightIcon width={iconHeaderSize - 10} height={iconHeaderSize - 10} fill='#000' />
            <NotiIcon width={iconHeaderSize - 20} height={iconHeaderSize - 20} fill='#01A5E4' style={{ marginLeft: 'auto', marginRight: 10, }} onPress={() => console.log("Hello")}/>
            <MenuIcon width={iconHeaderSize - 20} height={iconHeaderSize - 20} fill='#01A5E4' style={{ marginRight: 20, }} />
        </View>
    );
}

const iconSearchSize = Math.round(dimensions.height * 0.06); 

const SearchBar = (props) => { 
    return (
        <View style={{...props.style, flexDirection: 'row', height: iconSearchSize, width: 'auto', paddingLeft: 10, alignItems: 'center', marginLeft: 10, marginRight: 10, borderRadius: 20, backgroundColor: '#F9F9F9', }}>
            <SearchIcon width={iconSearchSize - 10} height={iconSearchSize - 10} fill='#9B9B9B' />
		    <TextInput style={{ marginLeft: 5, }} placeholder='Bạn muốn ăn gì?'/>
        </View>
    );
}

const ElementTable = (props) => { 
    return (
        <View style={{...props.style, alignItems: 'center', justifyContent: 'center'}}>
            <props.icon width={props.style.height - 25} height={props.style.width - 25}/>
            <Text style={{fontSize: props.style.fontSize, fontWeight: 'bold',  color: '#000'}}> 
                { props.description }
            </Text>
        </View>
    );
}

const elementSize = {width: Math.round(dimensions.width * 0.2), height: Math.round(dimensions.width * 0.25)}

const Table = (props) => { 
    return (
        <>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center'}}>
                <ElementTable icon={IconArray[0]} description={DescElement[0]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
                <ElementTable icon={IconArray[1]} description={DescElement[1]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
                <ElementTable icon={IconArray[2]} description={DescElement[2]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
                <ElementTable icon={IconArray[3]} description={DescElement[3]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center'}}>
                <ElementTable icon={IconArray[4]} description={DescElement[4]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
                <ElementTable icon={IconArray[5]} description={DescElement[5]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
                <ElementTable icon={IconArray[6]} description={DescElement[6]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
                <ElementTable icon={IconArray[7]} description={DescElement[7]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center'}}>
                <ElementTable icon={IconArray[8]} description={DescElement[8]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
                <ElementTable icon={IconArray[9]} description={DescElement[9]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
                <ElementTable icon={IconArray[10]} description={DescElement[10]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
                <ElementTable icon={IconArray[11]} description={DescElement[11]} style={{fontSize: 16, height: elementSize.height, width: elementSize.width}}/>
            </View>
        </>
    )
}

const BoomOrder = (props) => { 
    return (
        <>
            <View style={{backgroundColor: '#FAF3E1', width: '100%', height: dimensions.height * 0.3, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', ...props.style}}>
                <View style={{flexDirection: 'column', width: '65%', alignItems: 'flex-start', justifyContent: 'center', padding: 20, }}>
                    <Text style={{color: '#EB3136', fontWeight: 'bold', fontSize: 18}}>Giải cứu đơn hàng bom SOS</Text>
                    <Text style={{color: '#555', fontSize: 17, marginTop: 10, marginBottom: 10, }}>
                        Mỗi ngày có trung bình 30 - 40 đơn hàng bị bom. Hãy cùng chúng tôi giúp đỡ những tài xế.
                    </Text>
                    <TouchableOpacity style={{height: '20%', width: '85%', backgroundColor: '#EB3136', borderRadius: 100, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10, }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}> Giải cứu ngay </Text>
                        <ForwardIcon width={Math.round(dimensions.height * 0.04)} height={Math.round(dimensions.height * 0.04)} fill="#fff" style={{position: 'absolute', right: 10}}/>
                    </TouchableOpacity>
                </View>
                <View style={{position: 'absolute', right: 5, transform: [{ translateY: -5 }], height: dimensions.width * 0.35, width: dimensions.width * 0.35, backgroundColor: '#EB3136'}}/>
                <Image source={require('../../assets/background.png')} style={{height: dimensions.width * 0.35, width: dimensions.width * 0.35, backgroundColor: '#EB3136'}}/>
            </View>
        </>
    );
}

const DealHot = (props) => { 
    return (
        <View style={{width: '100%', height: dimensions.height * 0.35, padding: 10, justifyContent: 'flex-end', flexDirection: 'row', ...props.style}}>
            <Image source={require('../../assets/background.png')} style={{position: 'absolute', left: 10, bottom: 10, height: '90%', width: '35%', borderTopLeftRadius: 70, borderBottomRightRadius: 70}}/>
            <View style={{height: '95%', width: '20%', backgroundColor: '#EDF3FF', zIndex: -1, }}/>
            <View style={{height: '95%', width: '65%', backgroundColor: '#EDF3FF', zIndex: -2, borderTopRightRadius: 90, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#EB3136', fontWeight: 'bold', fontSize: 18, color: '#0066A8', marginRight: 10, }}> Deal hot chào tháng 11 </Text>
                    <Text style={{color: '#555', fontSize: 17, marginTop: 10, marginBottom: 10, width: '80%'}}>
                        Chúng tôi có rất nhiều ưu đãi chờ bạn khám phá, đặt đồ ăn ngay nào.
                    </Text>
                    <TouchableOpacity style={{height: '17%', width: '75%', backgroundColor: '#0066A8', borderRadius: 100, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10, }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}> Đặt hàng ngay </Text>
                        <ForwardIcon width={Math.round(dimensions.height * 0.03)} height={Math.round(dimensions.height * 0.03)} fill="#fff" style={{position: 'absolute', right: 10}}/>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export const Home = ({navigation}) => {
    return (
        <ScrollView  style={styles.container}>
            <Header style={{ marginTop: 10,}}/>
            <SearchBar style={{ marginTop: 20, marginBottom: 20, }} />
            <Table/>
            <BoomOrder style={{marginTop: 20, }}/>
            <DealHot style={{marginTop: 20, }}/>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
        backgroundColor: '#fff'
    },
});