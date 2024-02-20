import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  title: {
    color: 'gray',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#2B3A44',
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    fontSize: 30,
    color: 'white',
  },
});
export default styles;
