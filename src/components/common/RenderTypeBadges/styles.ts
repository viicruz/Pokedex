import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  badgeContainer:{
    width: "100%",
    justifyContent:'center',
    alignItems:'center'
  },
  badge: {
    width: "75%",
    borderRadius: 8,
    height:19,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});