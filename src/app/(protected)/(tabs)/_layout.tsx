import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

import SignOutButton from "@/components/common/SignOutButton";
import theme from "@/theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: { fontFamily: "Inter-SemiBold" },
        tabBarActiveTintColor: "black",
        tabBarLabelStyle: { fontFamily: "Inter-Regular" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Reddit",
          headerTitleStyle: {
            fontFamily: "Inter-SemiBold",
            color: theme.colors.primary,
          },
          headerRight: () => <SignOutButton />,
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="blank"
        options={{
          title: "Create",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="add-outline" size={size} color={color} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.push("/posts/create");
          },
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
