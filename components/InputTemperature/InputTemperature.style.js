import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        justifycenter: "center"
    },
    input: {
        backgroundColor: "white",
        borderRadius: 20,
        height: 50,
        alignSelf: "stretch",
        paddingLeft: 25
    },
    unit:{
        position: "absolute",
        fontSize: 35,
        alignSelf: "flex-end",
        paddingRight: 25
    }
});

export{ s };