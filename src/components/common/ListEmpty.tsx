import { View, ActivityIndicator } from "react-native";

import Text from "@/components/ui/Text";

type ListEmptyProps = {
  text?: string;
  isLoading?: boolean;
};

export default function ListEmpty({
  text = "No items found",
  isLoading,
}: ListEmptyProps) {
  return (
    <View className="h-20 justify-center items-center">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text className="text-gray-500">{text}</Text>
      )}
    </View>
  );
}
