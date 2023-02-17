import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="inverted" />

            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#351401"
                        },
                        headerTintColor: "white",
                        contentStyle: {
                            backgroundColor: "#3f2f25"
                        }
                        // headerBackButtonMenuEnabled: true
                    }}>
                    <Stack.Screen
                        options={{ title: "All Categories" }}
                        name="Categories"
                        component={CategoriesScreen}
                    />
                    <Stack.Screen
                        name="Meals Overview"
                        // options={({ route, navigation }) => {
                        //     const categoryId = route.params.categoryId;
                        //     return {
                        //         title: categoryId
                        //     };
                        // }}
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen
                        name="MealDetail"
                        // options={({ route, navigation }) => {
                        //     const categoryId = route.params.categoryId;
                        //     return {
                        //         title: categoryId
                        //     };
                        // }}
                        component={MealDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {}
});
