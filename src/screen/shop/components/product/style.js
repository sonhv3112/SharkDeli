import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  top: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    paddingVertical: 5,
    flex: 2,
  },
  bottom: {
    justifyContent: 'center',
    paddingVertical: 5,
    flex: 1,
  },
  butonView: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  buton: {
    width: 80,
    height: '100%',
    backgroundColor: '#5de8c1',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
})

export default styles;