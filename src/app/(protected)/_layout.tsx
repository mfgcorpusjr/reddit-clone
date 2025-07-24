import { Stack, Redirect } from "expo-router";

import useAuthStore from "@/store/useAuthStore";

export default function ProtectedLayout() {
  const session = useAuthStore((state) => state.session);

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
