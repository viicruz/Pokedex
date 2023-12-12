import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    statsContainer: {
        paddingTop: 20,
        display: "flex",
        width: "100%",
    },

    statsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 10,
        paddingLeft: 10,
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

    statValueContainer: {
        width: "85%",
        display: "flex",
        justifyContent: "flex-start",
    },

    statValue: {
        backgroundColor: "#42c963",
        borderRadius: 6,
        overflow: "hidden",
    },

    statValueText: {
        textAlign: "center",
        color: "white",
    },
});
