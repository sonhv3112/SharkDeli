import React, { useEffect, useContext, useRef } from 'react';
import { View, Text, Animated, StyleSheet, SafeAreaView, Dimensions, TextInput, TouchableOpacity, } from 'react-native';
import Svg, {Image, Circle, ClipPath, Polygon, Rect} from 'react-native-svg';
import { Context } from '../store/StoreProvider';

const background = require('../../assets/background.png'); 
const dimensions = Dimensions.get('window');
const svg_height = Math.round(dimensions.height * 0.5);

export const SignUp = ({navigation}) => {
  return (
	<SafeAreaView style={styles.container}>
		<View style={{position: 'absolute', backgroundColor: "#00A4E3", height: 200, width: '100%'}}/>
		<Animated.View style={{...styles.backgroundContainer, top: 50}}>
			<Svg height={svg_height} width='100%'>
				<ClipPath id='clip'>
					<Circle cx='50%' cy='100%' r={svg_height}/>
				</ClipPath>
				<Rect height="100%" width="100%" fill="#fff" clipPath="url(#clip)" />
			</Svg>
		</Animated.View>
		<Text style={styles.name}> SHARKDELI </Text>
		<Text style={styles.description}> Điền thông tin cá nhân để </Text>
		<Text style={styles.description}> hoàn tất đăng ký </Text>

		<Text style={styles.textForm}>
			Họ và Tên
		</Text>
		<TextInput style={styles.textInputForm} placeholder='Your name'/>

		<Text style={styles.textForm}>
			Số điện thoại
		</Text>
		<TextInput style={styles.textInputForm} placeholder='Your Phone'/>

		<Text style={styles.textForm}>
			Mật khẩu
		</Text>
		<TextInput style={styles.textInputForm} placeholder='Password'/>

		<Text style={styles.textForm}>
			Nhập lại mật khẩu
		</Text>
		<TextInput style={styles.textInputForm} placeholder='Re-password'/>

		<TouchableOpacity style={styles.submitButton} onPress={() => {}}>
			<Text style={styles.textSubmit}> Đăng ký </Text>    
		</TouchableOpacity>
		
		{/* <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => { navigation.navigate('Login'); }}>
			<Text style={styles.textSubmit}> Trở lại trang đăng nhập </Text>    
		</TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center', 
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
		position: 'absolute',
		bottom: 10, 
	}, 
	textSubmit: {
		fontSize: 16, 
		color: '#fff', 
		fontWeight: 'bold', 
	}
});