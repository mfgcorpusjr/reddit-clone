import { View, Image, ImageProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type ImagePreviewProps = {
  onDelete?: () => void;
} & ImageProps;

export default function ImagePreview({ onDelete, ...rest }: ImagePreviewProps) {
  return (
    <View>
      <Image {...rest} className="w-full aspect-square rounded-lg" />
      <Ionicons
        className="absolute top-3 right-3 bg-red-500 rounded-full p-1"
        name="close-outline"
        size={24}
        color="white"
        onPress={onDelete}
      />
    </View>
  );
}
