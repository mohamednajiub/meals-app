import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({ item }) {
    const { id, imageUrl, title, duration, complexity, affordability } = item;
    const navigation = useNavigation();

    function selectMealHandler() {
        navigation.navigate("MealDetail", {
            mealId: id
        });
    }
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMealHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8
    },
    innerContainer: {
        overflow: "hidden",
        borderRadius: 8
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginVertical: 8
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8
    },
    detailsItem: {
        fontSize: 12
    },
    buttonPressed: {
        opacity: 0.5
    }
});
