import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { bg, dark_grey, light_grey, white } from "../../../utils/color";

export default function RootLayout() {
  return (
    <Tabs screenOptions={
      {
        tabBarActiveTintColor: white,
        tabBarInactiveTintColor: light_grey,
        tabBarStyle:{
          backgroundColor:bg,
          borderColor:dark_grey
        }
      }
    }>
      <Tabs.Screen
        name="emergency"
        options={{
          headerShown: false,
          title: "Urgence",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="warning-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="direct"
        options={{
          headerShown: false,
          title: "Direct",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="contacts"
        options={{
          headerShown: false,
          title: "Contacts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="health"
        options={{
          headerShown: false,
          title: "Santé",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}