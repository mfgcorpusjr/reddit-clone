import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import Text from "@/components/ui/Text";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import KeyboardAvoidingScrollView from "@/components/helpers/KeyboardAvoidingScrollView";

export default function SignInScreen() {
  return (
    <SafeAreaView className="flex-1 p-4">
      <KeyboardAvoidingScrollView>
        <View className="flex-1 justify-center gap-10">
          <View className="items-center">
            <Image
              className="w-20 h-20"
              source={require("@assets/images/logo.png")}
            />
            <Text className="font-inter-bold text-2xl mt-4">
              Hey, Welcome Back
            </Text>
            <Text className="text-gray-400">
              Please enter your details to sign in
            </Text>
          </View>

          <View className="gap-6">
            <View className="gap-1">
              <Text className="text-gray-500">Email</Text>
              <TextInput
                placeholder="Enter your email"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View className="gap-1">
              <Text className="text-gray-500">Password</Text>
              <TextInput
                placeholder="Enter your password"
                autoCapitalize="none"
                secureTextEntry
              />
            </View>
          </View>

          <View className="gap-4">
            <Button text="Sign In" />

            <Text className="text-center text-gray-400">
              Don't have an account?{" "}
              <Link
                className="font-inter-semibold text-primary"
                href="/sign-up"
              >
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
}
