import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  homeLogo: {
    top: 105
  },  
  homeAvatar: {
    borderWidth: 2,
    borderColor: '#26CB17',
    borderRadius: 182,
    width: 142,
    height: 142,
    top: 182,
  },
  homeButton: {
    position: 'absolute',
    width: 195,
    height: 46,
    bottom: 115
  },
  imageItem: {
    width: 75,
    height: 75,
    marginHorizontal: 15,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#26CB17',
    borderRadius: 10
  },
  titleItem: {
    alignSelf: 'center',
    fontSize: 20,
  },
  listItem: {
    height: 105,
    width: 340,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    marginTop: 22,
    flex: 1,
    flexDirection: 'row',
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardImage: {
    width: 350,
    height: 350
  },
  card: {
    overflow: 'hidden',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 16,
    marginVertical: 32
  },
  cardTitle: {
    fontSize: 20,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingTop: 5,
    borderWidth: 0.2,
    borderColor: '#C6C6C6'
  },
  cardDescription: {
    fontSize: 14,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingTop: 5
  }
});

export default styles;

//  borderColor:'yourchoice', // if you need 
//  borderWidth:1,
//  overflow: 'hidden',
//  shadowColor: 'yourchoice',
//  shadowRadius: 10,
//  shadowOpacity: 1