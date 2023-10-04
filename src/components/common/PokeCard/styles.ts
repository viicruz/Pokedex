import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    width: "100%",
    height: 128,
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    marginBottom: 12,
    overflow:'hidden'
  },

  imageContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  titleContainer: {
    color: "black",
    fontWeight: "bold",
    fontSize: 22,
    flexDirection: "row",
    paddingLeft: 10,
  },

  idContainer: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
  },

  pkmInfo: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    gap: 6,
  },

  badgesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 4,
    maxWidth: "50%",
  },
  badge: {
    width: "75%",
    borderRadius: 8,
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
