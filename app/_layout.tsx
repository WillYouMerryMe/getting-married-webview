import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "react-native-reanimated";

const RootLayout = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "auto" }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </View>
  );
};

export default RootLayout;
