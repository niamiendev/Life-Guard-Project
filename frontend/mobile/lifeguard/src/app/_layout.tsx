import { Stack } from "expo-router";
import { AuthProvider } from "../../context/authContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index"
          options={{ headerShown: false, animation: "default" }}
        />
        <Stack.Screen name="login"
          options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen name="register"
          options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen name="forgot"
          options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, animation:"fade" }}
        />
      </Stack>
    </AuthProvider>
  )
}
