import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  information: {
    paddingTop: 60,
    flex: 1,
  },
  imageView:{
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  statistical: {
    width: '100%',
    height: '60%',
    paddingVertical: 30,
  },
  boder: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fff6bf',
  },
})

export default styles;