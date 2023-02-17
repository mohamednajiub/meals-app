import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return (
        <ScrollView style={{ marginBottom: 32 }}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.textStyle}
            />

            <Text style={styles.subTitle}>Ingredients</Text>

            {selectedMeal.ingredients.map((ingredient) => {
                return (
                    <View style={styles.listItem}>
                        <Text key={ingredient}>{ingredient}</Text>
                    </View>
                );
            })}

            <Text style={styles.subTitle}>Steps</Text>

            {selectedMeal.steps.map((step) => {
                return (
                    <View style={styles.listItem}>
                        <Text key={step}>{step}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "#fff"
    },
    textStyle: {
        color: "#fff"
    },
    subTitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textDecorationColor: "#e2b497",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        margin: 6
    },
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497"
    },
    listText: {
        color: "#351401"
    }
});
