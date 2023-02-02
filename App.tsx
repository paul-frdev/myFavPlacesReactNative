import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeNavigation } from "./navigators/NativeNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NativeNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
