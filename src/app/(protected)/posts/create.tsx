import {
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, Link, router } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import CloseButton from "@/components/common/CloseButton";
import ImagePreview from "@/components/common/ImagePreview";

import useCreatePost, { Form } from "@/hooks/useCreatePost";

export default function CreateScreen() {
  const {
    Controller,
    form: {
      control,
      handleSubmit,
      formState: { isValid },
    },
    query: { mutate, isPending },
    community,
    media,
    setMedia,
    pickMedia,
    resetForm,
  } = useCreatePost();

  const headerHeight = useHeaderHeight();

  const handleCreatePost = (data: Form) => mutate(data);

  const handleClose = () => {
    resetForm();
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => <CloseButton onPress={handleClose} />,
          headerRight: () => (
            <Button
              text="Post"
              containerClassName="bg-blue-500 rounded-full px-3"
              size="sm"
              loading={isPending}
              disabled={!isValid}
              onPress={handleSubmit(handleCreatePost)}
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
                {community ? (
                  <>
                    <Image
                      className="w-7 aspect-square rounded-full"
                      source={{ uri: community.avatar }}
                    />
                    <Text>{community.slug}</Text>
                  </>
                ) : (
                  <>
                    <View className="justify-center items-center bg-black w-7 aspect-square rounded-full">
                      <Text className="font-inter-bold text-white">r/</Text>
                    </View>
                    <Text>Select a community</Text>
                  </>
                )}
              </Pressable>
            </Link>

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="w-full border-none font-bold"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  style={{ fontSize: 24 }}
                  placeholder="Title"
                  scrollEnabled={false}
                  multiline
                />
              )}
              name="title"
            />

            {media && (
              <ImagePreview
                source={{ uri: media.uri }}
                onDelete={() => setMedia(undefined)}
              />
            )}

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="w-full border-none"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="body text (optional)"
                  scrollEnabled={false}
                  multiline
                />
              )}
              name="description"
            />
          </ScrollView>

          <View className="flex-row items-center gap-4 py-2">
            <Ionicons name="link-outline" size={24} color="black" />
            <Ionicons
              name="image-outline"
              size={24}
              color="black"
              onPress={() => pickMedia()}
            />
            <Ionicons name="videocam-outline" size={24} color="black" />
            <Ionicons name="list-outline" size={24} color="black" />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
