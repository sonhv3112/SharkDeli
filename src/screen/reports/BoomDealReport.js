import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import { Card, Button, Title, Paragraph, TextInput, RadioButton, Divider, IconButton, Checkbox } from 'react-native-paper';
import { useFormik } from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const dimensions = Dimensions.get('window');
const iconSize = Math.round(dimensions.height * 0.07);

const stories = {
  'id_order': 'XSFDJSHDH434HH'
};

const report = {
  'title': 'Báo cáo bom hàng',
  'sections': [
      {
          'title': 'Mã đơn hàng',
          'type': 'textview'
      },
      {
          'title': 'Vì sao bạn nghĩ đây là đơn hàng bom?',
          'type': 'checkbox',
          'option': [
              'Không liên lạc được với khách hàng trong 15p',
              'Khách hàng không có ý định nhận hàng',
              'Lý do khác'
          ],
          'require': true,
          'result': [
            false,
            false,
            false
          ]
      },
      {
          'title': 'Lý do khác',
          'type': 'textinput',
          'hint': 'Thêm một lý do'
      },
      {
        'title': 'Hướng xử lý',
        'type': 'radiobutton',
        'option': [
          'Đáng dấu là bom hàng',
          'Đánh dấu là hủy hàng'
        ]
      },
      {
        'title': 'Lưu ý',
        'type': 'notice',
        'content': 'Bạn không thể hoàn tác hành động này, đồng thời phải chịu toàn bộ trách nhiệm với các vấn đề phát sinh.'
      }
  ],
  'submit_button': 'BÁO CÁO'
};

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

const RadioButtonGroup = (props) => {
  // props.items
  // props.checked

  const [checked, setChecked] = useState(0);


  return (
    <View>
      {props.items.map( (content, index) => 
        <TouchableOpacity 
          style={styles.radiobuttonItemContainer}
          onPress={() => {
            setChecked(index);
            props.checked = index;
          }}>
          <RadioButton
            color={color.blue}
            value={index}
            status={checked==index? 'checked': 'unchecked'}
            onPress={() => {
              setChecked(index);
              props.checked = index;
            }}
          />
          <Text style={styles.radiobuttonItemContent}>
            {content}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const Body = (props) => {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{report.sections[0].title}</Text>
        <Text style={styles.textview}>{stories.id_order}</Text>
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

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{report.sections[3].title}</Text>
        <RadioButtonGroup 
          items={props.items1}
          checked={props.checked}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{report.sections[4].title}</Text>
        <Text style={styles.noticeContent}>{report.sections[4].content}</Text>
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

const BoomDealReport = ({navigation}) => {
  const formik = useFormik({
    initialValues: {
      id_order: stories.id_order,
      reasons: '',
      handle: ''
    },
    onSubmit: value => {
      // TODO: Add value from report.sections[1], report.sections[2] to value.reasons
      // TODO: Add value from report.sections[3] to value.handle
      // TODO: Using formik to handle form value
      // TODO: Linking to previous screen
      // TODO: Insert url of server
      // axios({
      //   method: 'post',
      //   url: '',
      //   data: {
      //     id_order: value.id_order,
      //     reasons: value.reasons,
      //     handle: value.handle
      //   }
      // }) 
      // .then(response => {
      //   console.log(response);
      // })
      // .catch(err => {
      //   Alert.alert('An error occurred!', err.message, [{ text: 'Okay' }]);
      // })
      Alert.alert('Báo cáo bom hàng thành công');
      navigation.navigate('Home');
    }
  });

  const onBackButtonPress = () => {
    // TODO: Return previous screen
    navigation.goBack()
  }

  console.log("loading")

  return (
    <View style={styles.container}>
      <Header onPress={onBackButtonPress} title={report.title}/>
      <Body 
        items0={report.sections[1].option}
        items1={report.sections[3].option}
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
    fontSize: 18,
    backgroundColor: color.white,
    padding: 15,
    fontWeight: 'bold',
    color: color.blue
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

  radiobuttonItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: color.white,
  },

  radiobuttonItemContent: {
    fontSize: 15,
    color: color.black,
  },

  noticeContent: {
    fontSize: 15,
    color: color.red,
    paddingHorizontal: 15,
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

export default BoomDealReport;