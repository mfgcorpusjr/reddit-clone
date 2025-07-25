import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function CloseButton() {
  return (
    <Ionicons
      name="close-outline"
      size={32}
      color="black"
      onPress={() => router.back()}
    />
  );
}
