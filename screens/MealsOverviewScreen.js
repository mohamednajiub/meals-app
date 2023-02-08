import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
    const categoryId = route.params.categoryId;

    const new_meals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    });

    return (
        <View style={styles.container}>
            <FlatList
                data={new_meals}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => <MealItem item={itemData.item} />}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
