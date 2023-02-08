import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";

function MealItem({ item }) {
    console.log("🚀 ~ file: MealItem.js:4 ~ MealItem ~ item", item);
    console.log();
    const { imageUrl, title, duration, complexity, affordability } = item;
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
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
                    <View style={styles.details}>
                        <Text style={styles.detailsItem}>Duration: {duration}m</Text>
                        <Text style={styles.detailsItem}>
                            Complexity: {complexity.toUpperCase()}
                        </Text>
                        <Text style={styles.detailsItem}>Affordability: {affordability}</Text>
                    </View>
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
