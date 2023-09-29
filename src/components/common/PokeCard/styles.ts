import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrap: {
    width: 180,
    height: 180,
    borderRadius: 10,
    
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

  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',     
    marginBottom: 8,      
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,       
    marginBottom: 2,      
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

