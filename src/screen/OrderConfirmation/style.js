import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15, 
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffe3c2',
  },
  information: {
    paddingTop: 60,
    flex: 1,
  },
  ReceivingAddress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  shop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  order: {
    flex: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  boder: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#000',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    backgroundColor: '#fffdea',
  },
  confirmation: {
    height: '10%',
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    paddingHorizontal: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  iconImage: {
    width: '100%',
    resizeMode: 'contain',
  },
})

export default styles;