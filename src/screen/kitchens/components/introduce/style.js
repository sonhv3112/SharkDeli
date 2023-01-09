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
    backgroundColor: '#ffe3c3',
    paddingHorizontal: 10,
  },
  introduceLeft: {
    flex: 56,
  },
  introduceLeftTop: {
    justifyContent: 'center',
    height: 60,
  },
  introduceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  introduceLeftBottom: {
    justifyContent: 'center',
    fontSize: 14,
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
    resizeMode: 'cover',
    borderRadius: 10,
  }
})

export default styles;