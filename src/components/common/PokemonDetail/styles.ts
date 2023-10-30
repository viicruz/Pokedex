import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pkmInfoContainer: {
    display: "flex",
    alignItems: "center",
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30
  },

  titleContainer:{
    color: "white",
    fontWeight: "400",
    fontSize: 35,
    textTransform:'capitalize',
  },

  typeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    maxWidth:'30%',
  },
});
