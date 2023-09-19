import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrap: {
    width: 180,
    height: 180,
    borderRadius: 10,
    borderColor:'black',
    borderWidth:2,
    marginHorizontal: 5,
    padding: 5,
    justifyContent: 'flex-start', 
    alignItems: 'center', 
  },

  titleContainer: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:22
  },

  pokeTypeContainer: {
    color: 'black',
    fontWeight: '600',
    fontSize:16
  },
});
