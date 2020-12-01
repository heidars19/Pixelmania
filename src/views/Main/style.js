import { StyleSheet } from 'react-native';
import { darkerBlue, graniteGray } from '../../styles/colors';

export default StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: darkerBlue,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  logo: {
    width: 200,
    height: 200,
  },

  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: '2.5em',
    fontWeight: 600,
  },

  paragraph: {
    textAlign: 'center',
    color: 'white',
  },

  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: graniteGray,
  },

  buttontext: {
    color: 'white',
  },

});
