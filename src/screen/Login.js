import React, { useEffect, useRef, useContext } from 'react';
import { View, Text, Animated, StyleSheet, SafeAreaView, Dimensions, TextInput, TouchableOpacity, } from 'react-native';
import Svg, {Image, Circle, ClipPath, Polygon, Rect} from 'react-native-svg';
import { Context } from '../store/StoreProvider';
import { SvgUri } from 'react-native-svg';

import SharkLogo from '../../assets/shark.svg';

const background = require('../../assets/background.png'); 
const dimensions = Dimensions.get('window');
const svg_height = Math.round(dimensions.height * 0.5);

export const Login = ({navigation}) => {	
	const authenticate = (username, password) => { 
		if (username == 'admin' && password == 'admin')
			return true; 
		return false; 
	}

  return (
	<SafeAreaView style={styles.container}>
		<View style={{position: 'absolute', backgroundColor: "#00A4E3", height: 400, width: '100%'}}/>
		<Animated.View style={{...styles.backgroundContainer, top: 150}}>
			<Svg height={svg_height} width='100%'>
				<ClipPath id='clip'>
					<Circle cx='50%' cy='100%' r={svg_height}/>
				</ClipPath>
				<Rect height="100%" width="100%" fill="#fff" clipPath="url(#clip)" />
			</Svg>
		</Animated.View>
		<View style={{marginTop: 95, height: 140, width: 140, borderRadius: 100, backgroundColor: '#D7E0EB', alignItems: 'center', justifyContent: 'center'}}>
			<SharkLogo width={110} height={110}/>
		</View>
		<Text style={{marginTop: 20, fontSize: 21, fontWeight: 'bold', color: '#000', }}>
			CHÀO MỪNG BẠN ĐẾN VỚI
		</Text>
		<View style={{flexDirection: 'row'}}>
			<Text style={{fontSize: 21, fontWeight: 'bold', color: '#01A5E4', }}>SHARKDELI</Text>
			<Text style={{fontSize: 21, fontWeight: 'bold', color: '#000', }}> !!!</Text>
		</View>
		<Text style={{marginTop: 15, fontSize: 18, color: '#000', }}> 
			Nhập tài khoản của bạn để tiếp tục
		</Text>

		<Text style={styles.textForm}>
			Số điện thoại
		</Text>
		<TextInput style={styles.textInputForm} placeholder='Your Phone'/>

		<Text style={styles.textForm}>
			Mật khẩu
		</Text>
		<TextInput style={styles.textInputForm} placeholder='Password'/>

		<TouchableOpacity style={styles.submitButton} onPress={() => { 
			navigation.navigate('Home') 
			}}>
			<Text style={styles.textSubmit}> Đăng nhập </Text>    
		</TouchableOpacity>
    </SafeAreaView>
  );
}

const logoWidth = Math.round(dimensions.height * 0.13);
const logoHeight = logoWidth;

const styles = StyleSheet.create({
	container: {
	flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center', 
	},
	logo: {
	  width: logoWidth,
	  height: logoHeight,
	},
	name: { 
		marginTop: 80,
		fontSize: 30, 
		fontWeight: 'bold',
		letterSpacing: 6, 
		color: '#EEB5EB',
		width: '100%', 
		textAlign: 'center', 
		marginBottom: 30,
	},
	description: { 
		color: '#4D4543', 
		fontSize: 18,
		fontWeight: 'bold', 
	},	
	header: { 
		fontSize: 18, 
		color: '#807B5F', 
		fontWeight: 'bold', 
		alignSelf: 'center',
	},
	backgroundContainer: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	background: { 
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		alignItems: 'center',
	}, 
	textForm: { 
		fontSize: 17, 
		color: '#C9C9C9', 
		textAlign: 'left', 
		width: '90%',
		fontWeight: 'bold', 
		marginLeft: 20,
		marginBottom: 5,
		marginTop: 15, 
	},
	textInputForm: {
		width: '90%', 
		borderColor: '#D9D9D9',
		borderWidth: 2,
		paddingLeft: 20, 
		paddingRight: 20,
		borderRadius: 20,
		height: 40,
	}, 
	submitButton: {
		width: '80%',
		padding: 10, 
		backgroundColor:'#00A4E3',
		borderRadius:30,
		borderColor: '#fff',
		alignSelf: 'center',
		marginBottom: 15, 
		alignItems: 'center', 
		marginTop: 30, 
	}, 
	textSubmit: {
		fontSize: 16, 
		color: '#fff', 
		fontWeight: 'bold', 
	}
});