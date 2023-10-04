import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    width: 180,
    height: 180,
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 5,
    padding: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 5,
  },

  titleContainer: {
    color: "#020617",
    fontWeight: "bold",
    fontSize: 22,
  },

  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  badge: {
    marginVertical: -8,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
  },
});
