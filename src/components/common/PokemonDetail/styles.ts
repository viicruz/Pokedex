import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  pkmInfoContainer: {
    display: "flex",
    alignItems: "center",
    height: 264,
    gap: 10,
    width: "100%",
    position: "relative",
    
  },

  imageContainer: {
    width: 200,
    height: 200,
  },

  pkmInfoWrapper: {
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: "#f2f5f7",
    marginTop: -20,
  },

  titleContainer: {
    color: "#353535",
    fontWeight: "400",
    fontSize: 35,
    textTransform: "capitalize",
    paddingTop: 20,
  },

  typeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    maxWidth: "30%",
    marginBottom: 20,
  },

  sizeInformationsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 32,
    alignItems: "center",
  },
  sizeContainer: {
    fontSize: 22,
  },

  statsContainer: {
    paddingTop:20,
    display: "flex",
    width: "100%",
  },

  statsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingLeft:10,
  },
  statHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,

  },
  statName: {
    flex: 1,
    textAlign: "left",
  },

  statValueContainer:{
    width:'85%',
    display:'flex',
    justifyContent:'flex-start',
  },

  statValue: {
    backgroundColor:'#42c963',
    borderRadius:6,
    overflow: 'hidden',
  },

  statValueText: {
    textAlign: 'center',
    color: 'white',
},
});
