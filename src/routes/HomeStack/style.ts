import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#e01c4c",
    width: "100%",
    height: 80,
    display: "flex",
  },
  headerTitleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingTop: 10,
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 20,
  },

  dexBallLarge: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#2ea9f3",
    borderColor: "white",
    borderWidth: 4,
    display: "flex",
    position: "relative",
  },

  dexBallMedium: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#186a9f",
    left: "6%",
    top: "6%",
  },

  dexBallSmall: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: "#2ea9f3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "8%",
    top: "10%",
  },

  dexBallXsmall: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "20%",
    left: "20%",
  },
});
