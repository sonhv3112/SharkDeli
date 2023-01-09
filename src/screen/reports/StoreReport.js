import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import { Card, Button, Title, Paragraph, TextInput, RadioButton, Divider, IconButton, Checkbox } from 'react-native-paper';
import { useFormik } from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const dimensions = Dimensions.get('window');
const iconSize = Math.round(dimensions.height * 0.07)- 10;

const stories = {
    "id_shop": "DFSERDD",
    "name": "Phúc Long - Nguyễn Thị Minh Khai",
    "address": "145 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh",
}

const report = {
    "title": "Báo cáo cửa hàng",
    "sections": [
        {
            "title": "Cửa hàng",
            "type": "store-name"
        },
        {
            "title": "Vấn đề",
            "type": "checkbox",
            "option": [
                "Cửa hàng bán món ăn vi phạm pháp luật",
                "Cửa hàng cung cấp thông tin sai lệch",
                "Cửa hàng mạo danh cửa hàng khác",
                "Cửa hàng cung cấp thực phẩm không đúng với yêu cầu",
                "Cửa hàng có hành vi tiêu cực với shipper/khách hàng",
                "Lý do khác"
            ],
            "result": [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "require": true
        },
        {
            "title": "Lý do khác",
            "type": "textinput",
            "hint": "Thêm một lý do"
        }
    ],
    "submit_button": "BÁO CÁO"
}

const Header = (props) => {
    return (
        <View style={styles.header}>
        <TouchableOpacity onPress={props.onPress} style={styles.iconButton}>
            <MaterialIcons name='arrow-back' size={25} color={color.black}/>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>
            {props.title}
            </Text>
        </View>
        </View>
    );
}


const CheckBoxItem = (probs) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <TouchableOpacity
            onPress={
                () => {
                setChecked(!checked)
                probs.checked = checked
                }
        }>
            <View style={styles.checkboxItemContainer}>

            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                style={styles.checkboxIcon}
                color={color.blue}
                />

            <Text style={styles.checkboxItemContent}>{probs.content}</Text>
            </View>
        </TouchableOpacity>
    );
}


const Body = (props) => {
    return (
      <ScrollView style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{report.sections[0].title}</Text>
          
          <View style={styles.textview}>
            <Text style={styles.shopName}>{stories.name}</Text>
            <Text style={styles.address} numberOfLines={1}>{stories.address}</Text>
          </View>
        </View>
  
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{report.sections[1].title}</Text>
          <View style={styles.checkboxContainer}>
            {props.items0.map( (content, index) => 
              <CheckBoxItem 
                content={content} 
                checked={props.reasons[index]}
                />)}
          </View>
        </View>
  
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{report.sections[2].title}</Text>
          <TextInput 
            style={styles.textinput} 
            selectionColor={color.blue}
            placeholder={report.sections[2].hint}
            underlineColor='transparent'
            />
        </View>
    
        <Footer
          submitAction={props.submitAction}/>
      </ScrollView>
    )
  }

  const Footer = (props) => {
    // props.submitAction
    
    return (
      <View style={styles.footer}>
        <Button 
          mode='contained' 
          onPress={props.submitAction}
          compact={true}
          buttonColor={color.red}
          textColor={color.white}
          style={styles.button}
          >
          {report.submit_button}
        </Button>
      </View>
    );
  }
  
const StoreReport = ({navigation}) => {
    const formik = useFormik({
        initialValues: {
          id_shop: stories.id_shop,
          problems: ''
        },
        onSubmit: value => {
          // TODO: Add value from report.sections[1], report.sections[2] to value.problems
          // TODO: Using formik to handle form value
          // TODO: Linking to previous screen
          // TODO: Insert url of server
          axios({
            method: 'post',
            url: '',
            data: {
              id_shop: value.id_shop,
              problems: value.problems
            }
          }) 
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            Alert.alert('An error occurred!', err.message, [{ text: 'Okay' }]);
          })
        }
      });
    
      const onBackButtonPress = () => {
        // TODO: Return previous screen
      }
    
      console.log("loading")
    
      return (
        <View style={styles.container}>
          <Header onPress={onBackButtonPress} title={report.title}/>
          <Body 
            items0={report.sections[1].option}
            reasons={report.sections[1].result}
            submitAction={formik.handleSubmit}
            />
          
        </View>
      );
}

const color = {
    black: '#000000',
    lightgrey: '#f9f9f9',
    grey: '#5B5F62',
    red: '#e93330',
    white: '#ffffff',
    blue: '#00a6e4'
  };
  
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      height: iconSize,
      width: '100%',
      backgroundColor: color.white,
      alignItems: 'center'
    },
  
    iconButton: {
      alignItems: 'center',
      margin: 10,
    },
  
    headerTitle: {
      fontSize: 18,
      // fontWeight: 'bold',
      color: color.black
    },
  
    headerTitleContainer: {
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    },
  
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: color.lightgrey
    },
  
    body: {
      flexDirection: 'column'
    },
  
    sectionContainer: {
      flexDirection: 'column',
      width: '100%'
    },
  
    sectionTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: color.grey,
      marginHorizontal: 15,
      marginVertical: 10
    },

    textview: {
        backgroundColor: color.white,
        padding: 15
    },

    shopName: {
        color: color.blue,
        fontWeight: 'bold',
        fontSize: 18
    },

    address: {
        color: color.grey,
        fontSize: 14
    },
    
    checkboxContainer: {
      backgroundColor: color.white,
    },
  
    checkboxItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10
    },
  
    checkboxItemContent: {
      fontSize: 15,
      color: color.black,
      marginRight: 50
    },
  
    textinput: {
      fontSize: 15,
      color: color.black,
      backgroundColor: color.white,
    },
  
    footer: {
      height: iconSize + 10,
      width: '100%',
      justifyContent: 'center',
      paddingHorizontal: 70,
      paddingVertical: 5,
      marginTop: 10
    }
  });

export default StoreReport;