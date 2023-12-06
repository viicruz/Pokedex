import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper:{
    display:'flex',
    flexDirection:'column'
  },
  pkmInfoContainer: {
    display: "flex",
    alignItems: "center",
    height:240,
    gap:10,
    width:'100%',
    position:'relative',
  },

  imageContainer: {
    width: 200,
    height: 200,  
  },
 
  shadowProp: {   
    borderTopRightRadius:24,
    borderTopLeftRadius:24,
    backgroundColor:"#f2f5f7", 
    marginTop:-20,
  },  

  titleContainer: {
    color: "#353535",
    fontWeight: "400",
    fontSize: 35,
    textTransform: "capitalize",
    paddingTop:20
  },

  typeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    maxWidth: "30%",
    marginBottom:20
  },

  sizeInformationsContainer:{
    display:"flex",
    flexDirection:'row',
    gap:32,
    alignItems:'center',
  },
  sizeContainer:{
    fontSize:22
  },

  statsContainer:{
    display:'flex',
    width:'100%'
  }

});
