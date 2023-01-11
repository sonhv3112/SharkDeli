import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({

  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },

  header: {
    marginHorizontal: 10,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#eeb5eb',
  },
  information: {
    backgroundColor: '#fff',
    height: '70%',
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  imageView:{
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  nameView: {
    flex: 1,
    alignItems: 'center',
  },
  detailBottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailBottom: {
    height: 50,
    width: 120,
    backgroundColor: '#5de8c1',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles;