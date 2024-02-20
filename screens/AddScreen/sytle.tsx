import {StyleSheet} from 'react-native';

// Stil tanımları
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  altContainer: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    justifyContent: 'center',
    margin: 10,

    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: 'row',
  },
  dot: {
    width: 15,
    height: 15,
    borderWidth: 5,
    marginTop: 5,
    borderColor: 'pink',
    borderRadius: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 10,
    height: 40,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dateContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 13,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,

    fontWeight: 'bold',
  },
});
export default styles;
