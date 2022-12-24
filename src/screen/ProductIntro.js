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
  FlatList,
  Pressable
} from 'react-native';

function ProductIntro({item}) {
  console.log(item.img)
  return (
            <Pressable style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '#d1d1d1',
                borderRadius: 10,
                backgroundColor: '#fff',
                marginVertical: 5,
              }} onPress={()=>{}}>
                <View style={{flex: 1}}>
                <Text style={{fontSize: 20, color: '#000'}}> {item.name} </Text>
                <Text style={{fontSize: 20, color: '#000'}}> {item.price} </Text>
                </View>
                 <Image style={{flex: 2, height: 150, width: 150, resizeMode: 'contain', resizeMethod: "resize"}} source={item.img}/>
            </Pressable>
  );
}

export default ProductIntro;
