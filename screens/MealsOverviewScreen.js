import { useEffect, useState, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;

    const new_meals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    });

    useLayoutEffect(() => {
        const CategoryTitle = CATEGORIES.find((category) => {
            return category.id === categoryId;
        }).title;

        navigation.setOptions({
            title: CategoryTitle
        });
    }, [categoryId, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={new_meals}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => <MealItem item={itemData.item} />}
            />
        </SafeAreaView>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
