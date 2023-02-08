import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <>
            <StatusBar style="inverted" />
            <SafeAreaView>
                <CategoriesScreen />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {}
});
