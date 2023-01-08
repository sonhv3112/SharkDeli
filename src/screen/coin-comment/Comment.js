import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ToggleSwitch from 'toggle-switch-react-native';
import StarRating from 'react-native-star-rating-widget';
import {
    Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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

function Comment(props) { 
    const [starCnt, UpdStar] = useState(5)
  return (
    <View>
        <Text style={styles.storeName}> Phúc Long - Nguyễn Thị Minh Khai</Text>
        <View style={{alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <StarRating
                rating={starCnt}
                onChange={UpdStar}
                alignSelf={'center'}
                fontSize={25}
            />
        </View>
        
        <Text style={{fontSize:20, fontWeight: 'bold'}}> Nhận xét</Text>
        <View style={styles.rowContainer}>
            <Text style={{flex: 1, fontSize: 20}}> <Icon name="edit" size={20}/> </Text>
            <TextInput style={{fontSize: 20, flex: 5}}> </TextInput>
        </View>
        <View style={styles.rowContainer}>
            <Text style={{flex: 5, fontSize: 20}}> <Icon name="incognito" size={20}/> Nhận xét ẩn danh </Text>
            <ToggleSwitch
                isOn={false}
                onColor="blue"
                offColor="black"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="large"
                onToggle={isOn => console.log("changed to : ", isOn)}
                />
        </View>
        <View style={styles.rowContainer}>
            <View style={{flex: 2, height: 50}}>
                <Text style={{flex: 1, fontSize: 20,}}> Xu nhận được </Text>
                <Text style={{flex: 1, fontSize: 20,}}> <Icon name="coins" size={20}/> 200 </Text>
            </View>
            <Button style={{alignSelf: 'center', flex: 3}}color={"cyan"} title="Gửi" />
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
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    storeName: {
        color: 'blue',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    normalText: {
        color: 'black',
        fontSize: 20,
    },
  });
export default Comment;
