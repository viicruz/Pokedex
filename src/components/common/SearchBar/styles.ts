import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    alignItems: "center",
    backgroundColor:'transparent',
},

  inputContainer: {
    display:'flex',
    alignItems:'center',
    width: "70%",
    height: 40,
    flexDirection:'row',
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 8,
    padding: 4,
    gap:6,
    marginVertical:20
  },
});
