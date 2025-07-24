import { Stack, Redirect } from "expo-router";

export default function ProtectedLayout() {
  // TODO: remove this later
  return <Redirect href="/sign-in" />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
