import { Stack, Redirect } from "expo-router";

import CloseButton from "@/components/common/CloseButton";

import useAuthStore from "@/store/useAuthStore";

export default function ProtectedLayout() {
  const session = useAuthStore((state) => state.session);

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="posts/create"
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="communities"
        options={{
          title: "Post to",
          headerTransparent: true,
          headerLeft: () => <CloseButton />,
        }}
      />
    </Stack>
  );
}
