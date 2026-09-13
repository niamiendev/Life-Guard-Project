import { Stack } from "expo-router";
import { bg } from "../../utils/color";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" />
    <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false }}
    />
  </Stack>
}
