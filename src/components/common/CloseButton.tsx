import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

type CloseButtonProps = {
  onPress?: () => void;
};

export default function CloseButton({
  onPress = () => router.back(),
}: CloseButtonProps) {
  return (
    <Ionicons name="close-outline" size={32} color="black" onPress={onPress} />
  );
}
