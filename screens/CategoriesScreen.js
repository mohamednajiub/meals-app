import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData, navigation) {
    function pressHandler() {
        navigation.navigate("Meals Overview", {
            categoryId: itemData.item.id
        });
    }

    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />
    );
}

function CategoriesScreen({ navigation }) {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(item) => renderCategoryItem(item, navigation)}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
