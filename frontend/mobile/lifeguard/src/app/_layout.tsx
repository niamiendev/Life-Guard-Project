import { Stack } from "expo-router";
import { bg } from "../../utils/color";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{ headerShown: false, animation: "default" }}
      />
      <Stack.Screen name="login"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen name="register"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen name="forgot"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}
