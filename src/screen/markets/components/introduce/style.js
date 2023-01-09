import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  header: {
    marginHorizontal: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  back: {
    width: 20,
    resizeMode: 'contain',
  },
  headerText: {
    flex: 1,
    paddingRight: 10,
    alignItems: 'center',
  },
  introduce: {
    height: 160,
    flexDirection: 'row',
    backgroundColor: '#fff9E7',
    paddingHorizontal: 10,
  },
  introduceLeft: {
    flex: 56,
  },
  introduceLeftTop: {
    justifyContent: 'center',
    height: 30,
  },
  introduceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  introduceLeftBottom: {
    justifyContent: 'center',
  },
  introduceRight: {
    flex: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  }
})

export default styles;