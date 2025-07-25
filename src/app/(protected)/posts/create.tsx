import {
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, Link } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";

export default function CreateScreen() {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              text="Post"
              containerClassName="bg-blue-500 rounded-full px-3"
              size="sm"
            />
          ),
        }}
      />

      <SafeAreaView
        style={{ marginTop: headerHeight }}
        className="flex-1 p-4"
        edges={["bottom"]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={headerHeight}
          className="flex-1 gap-4"
        >
          <ScrollView
            contentContainerClassName="grow gap-4"
            showsVerticalScrollIndicator={false}
          >
            <Link href="/communities" asChild>
              <Pressable className="flex-row items-center self-start gap-2 bg-gray-200 px-3 py-1 rounded-full">
                <View className="justify-center items-center bg-black w-7 aspect-square rounded-full">
                  <Text className="font-inter-bold text-white">r/</Text>
                </View>
                <Text>Select a community</Text>
              </Pressable>
            </Link>

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

          <View className="flex-row items-center gap-4 py-2">
            <Ionicons name="link-outline" size={24} color="black" />
            <Ionicons name="image-outline" size={24} color="black" />
            <Ionicons name="videocam-outline" size={24} color="black" />
            <Ionicons name="list-outline" size={24} color="black" />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
