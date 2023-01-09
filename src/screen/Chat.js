import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
const messages = [];
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const SendMessage = ({content, time}) => {
  return (
  <View style={{backgroundColor:'#ccf2ff', borderRadius: 4, marginLeft: 150, marginRight: 10, marginTop: 20}}>
  <Text style={{fontSize: 10, opacity: 0.7, paddingLeft: 7, paddingTop: 7}}>{time}</Text>
  <Text style={{fontSize: 15, padding: 7}}>{content}</Text>
  </View>
  );
};

const RecMessage = ({content, time}) => {
  return (
  <View style={{backgroundColor:'white', borderRadius: 4, marginLeft: 10, marginRight: 150, marginTop: 20}}>
  <Text style={{fontSize: 10, opacity: 0.7, paddingLeft: 7, paddingTop: 7}}>{time}</Text>
  <Text style={{fontSize: 15, padding: 7}}>{content}</Text>
  </View>
  );
};
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Chat = ({navigation}) => {
const [text, setText] = React.useState("");
const [index, setIndex] = React.useState(0);
const updateMess = () => {
      if(text.trim()){
      var msg = {}
      msg.id = index;
      setText("")
      var day = new Date();
      var time = day.getHours() + ":" + day.getMinutes()
      setIndex(index+1)
      msg.content = text;
      msg.time = time;
      messages.push(msg);
      console.log(messages)
      }
}
  return (
     <SafeAreaView>
         <View style={{...styles.titleHeader, alignItems: 'center',}}>
         <TouchableOpacity style={{}} onPress={()=>navigation.goBack()}>
            <AntDesign name='arrowleft' style={{fontSize:22, marginRight:20,paddingTop: 10, marginLeft:10}}></AntDesign>
         </TouchableOpacity>
         <View>
         <AntDesign name='user' style={{fontSize:45}}></AntDesign>
         </View>
         <View style={{marginLeft:10}}>
         <Text style={styles.name}>Tiệm bún cô Hương</Text>
         <Text style={styles.status}>Đang hoạt động</Text>
         </View>
         </View>
       <ScrollView
         style={{height:'80%', backgroundColor:'#e6e6e6'}}
         contentInsetAdjustmentBehavior="automatic">
         <View>
         <SendMessage content={"Xin chào !"} time={"12:05"} />
         <RecMessage content={"Tiệm bún cô Hương xin nghe!"} time={"12:06"} />
         {messages.map((message) => (
                     <SendMessage content={message.content} time={message.time} key={message.id}/>
         ))}
         </View>
       </ScrollView>
       <View style={styles.InputFrame}>
       <TouchableOpacity style={ {marginLeft: '2%', marginTop: '4%'}} >
       <AntDesign name='pluscircleo' style={{fontSize:30}}></AntDesign>
       </TouchableOpacity>
       <TextInput
               value={text}
               style={styles.input}
               onChangeText={text => setText(text)}
               multiline
               placeholder="..."
             />
       <TouchableOpacity style={ {marginTop: '4%'}} onPress={updateMess} >
       <Feather name='send' style={{fontSize:30}}></Feather>
       </TouchableOpacity>
       </View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  name: {
  fontSize:22,
  color:'white',
  fontWeight:'3'
  },
  status: {
    fontSize:12,
    color:'white',
    fontWeight:'1'
    },
  input:{
   height: 40,
   width: '75%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 20,
  },
  InputFrame:{
    backgroundColor:'white',
    flexDirection: 'row',
    height: '10%',
  },
  Img:{
    height:10,
  },
  sectionContainer: {
    paddingTop: 10,
    marginTop: 32,
    paddingHorizontal: 24,
  },
    titleHeader: {
      backgroundColor:'#3399ff',
      flexDirection: 'row',
      height: '10%',
    },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Chat;