import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginHorizontal: 10,
    height: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  back: {
    width: 10,
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
    fontSize: 15,
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
    resizeMode: 'cover',
    borderRadius: 10,
  }
})

export default styles;