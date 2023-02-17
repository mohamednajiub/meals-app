import { StyleSheet, Text, View } from "react-native";

function MealDetails({ duration, complexity, affordability, style, textStyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailsItem, textStyle]}>Duration: {duration}m</Text>
            <Text style={[styles.detailsItem, textStyle]}>
                Complexity: {complexity.toUpperCase()}
            </Text>
            <Text style={[styles.detailsItem, textStyle]}>Affordability: {affordability}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8
    },
    detailsItem: {
        fontSize: 12
    }
});
