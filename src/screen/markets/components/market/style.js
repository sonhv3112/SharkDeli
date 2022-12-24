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
    borderRadius: 10,
  },
  top: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    flex: 3,
  },
  bottom: {
    justifyContent: 'center',
    flex: 1,
  },
})

export default styles;