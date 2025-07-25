import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import CloseButton from "@/components/common/CloseButton";

export default function CreateScreen() {
  return (
    <SafeAreaView className="flex-1 p-4">
      <View className="flex-row justify-between items-center pb-4">
        <CloseButton />
        <Button
          text="Post"
          containerClassName="bg-blue-500 rounded-full px-3"
          size="sm"
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
        className="flex-1 gap-4"
      >
        <ScrollView
          contentContainerClassName="grow gap-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row items-center self-start gap-2 bg-gray-200 px-3 py-1 rounded-full">
            <View className="justify-center items-center bg-black w-7 aspect-square rounded-full">
              <Text className="font-inter-bold text-white">r/</Text>
            </View>
            <Text>Select a community</Text>
          </View>

          <TextInput
            className="border-none font-bold"
            style={{ fontSize: 24 }}
            placeholder="Title"
            scrollEnabled={false}
            multiline
          />

          <TextInput
            className="border-none"
            placeholder="body text (optional)"
            scrollEnabled={false}
            multiline
          />
        </ScrollView>

        <View className="flex-row items-center gap-4">
          <Ionicons name="link-outline" size={24} color="black" />
          <Ionicons name="image-outline" size={24} color="black" />
          <Ionicons name="videocam-outline" size={24} color="black" />
          <Ionicons name="list-outline" size={24} color="black" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
