import React, { useContext, useEffect } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, SafeAreaView, Dimensions, Alert, TouchableOpacity } from 'react-native';
import { Context } from '../store/StoreProvider';

const background = require('../../assets/background.png'); 
const logo = require('../../assets/logo2.png');

export const Start = ({navigation}) => {
  const [globalState, globalDispatch] = useContext(Context); 

  useEffect(() => { globalDispatch({ type: 'ON_START', }); }, [])

  return (
    <SafeAreaView  style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.containerLogo}>
            <Image source={logo} style={styles.logo} />
        </View>
        <Text style={styles.name}>
            SHARKDELI
        </Text>
        <TouchableOpacity style={styles.SignUpButton} onPress={ () => { navigation.navigate('Login'); } }>
            <Text style={styles.TextStyle}> ĐĂNG NHẬP </Text>    
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginButton} onPress={ () => { navigation.navigate('SignUp'); } }>
            <Text style={[styles.TextStyle, {color: '#EEB5EB'}]}> ĐĂNG KÝ </Text>    
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const dimensions = Dimensions.get('window');
const logoWidth = Math.round(dimensions.height * 0.16);
const logoHeight = logoWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  containerLogo: { 
    marginTop: '15%',
    height: Math.round(dimensions.height * 0.24), 
    width: Math.round(dimensions.height * 0.24), 
    backgroundColor: '#fff',
    borderRadius: Math.round(dimensions.height * 0.10),
    justifyContent: 'center',
    alignItems: 'center',
  },    
  logo: {
    width: logoWidth,
    height: logoHeight,
  },
  name: { 
    fontSize: 30, 
    fontWeight: 'bold',
    letterSpacing: 6, 
    color: '#EEB5EB',
    width: '100%', 
    backgroundColor: '#fff',
    textAlign: 'center', 
    padding: 20, 
    position: 'absolute', 
    top: '45%', 
  },    
  SignUpButton: {
    position: 'absolute', 
    bottom: '20%', 
    paddingTop:15,
    paddingBottom:15,
    width:'70%',
    backgroundColor:'#EEB5EB',
    borderRadius:30,
    borderColor: '#fff'
  }, 
  LoginButton: {
    position: 'absolute', 
    bottom: '7%', 
    paddingTop:10,
    paddingBottom:10,
    width:'70%',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#EEB5EB',
    backgroundColor: '#fff',
    borderWidth: 3,
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 21,
      fontWeight: 'bold',
  },
});