import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function DeliveryInfo(props) {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.storeName}> Phúc Long - Nguyễn Thị Minh Khai </Text>
            <View style={styles.products}>
                <Text fontSize={20} flex={3}> 1X</Text>
                <View flex={2}>
                  <Text fontSize={20}> Trà đào cam sả</Text>
                  <Text fontSize={15}> Size L, Thạch trái cây</Text>
                </View> 
                <Text style={styles.price}> 42.000đ</Text> 
            </View>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 3, fontSize: 15,}}> 1 món</Text>
            <Text style={{flex: 1, fontSize: 15, fontWeight: 'bold',}}> Thành tiền</Text>
            <Text style={{flex: 1, fontSize: 15, fontWeight: 'bold',}}> 37.000đ</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    storeName: {
        color: 'blue',
        fontSize: 20,
    },
    products: {
        color: 'black',
        flexDirection: 'row'
    },
  });
export default DeliveryInfo;
