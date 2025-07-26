import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import Text from "@/components/ui/Text";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import KeyboardAvoidingScrollView from "@/components/helpers/KeyboardAvoidingScrollView";

import useSignUp, { Form } from "@/hooks/useSignUp";

export default function SignUpScreen() {
  const {
    Controller,
    form: {
      control,
      handleSubmit,
      formState: { errors },
    },
    query: { mutate, isPending },
  } = useSignUp();

  const handleSignUp = (data: Form) => mutate(data);

  return (
    <SafeAreaView className="flex-1 p-4">
      <KeyboardAvoidingScrollView>
        <View className="flex-1 justify-center">
          <View className="items-center">
            <Image
              className="w-20 h-20"
              source={require("@assets/images/logo.png")}
            />
            <Text className="font-inter-bold text-2xl mt-4">
              Lets' Get Started
            </Text>
            <Text className="text-gray-400">
              Please fill the details to sign up
            </Text>
          </View>

          <View className="gap-1 mt-12">
            <View className="gap-1">
              <Text className="text-gray-500">Username</Text>
              <View>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="Enter your username"
                      autoCapitalize="none"
                    />
                  )}
                  name="username"
                />
                <Text className="text-base text-red-500">
                  {errors.username?.message}
                </Text>
              </View>
            </View>

            <View className="gap-1">
              <Text className="text-gray-500">Email</Text>
              <View>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="Enter your email"
                      autoCapitalize="none"
                      keyboardType="email-address"
                    />
                  )}
                  name="email"
                />
                <Text className="text-base text-red-500">
                  {errors.email?.message}
                </Text>
              </View>
            </View>

            <View className="gap-1">
              <Text className="text-gray-500">Password</Text>
              <View>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="Enter your password"
                      autoCapitalize="none"
                      secureTextEntry
                    />
                  )}
                  name="password"
                />
                <Text className="text-base text-red-500">
                  {errors.password?.message}
                </Text>
              </View>
            </View>
          </View>

          <View className="gap-4 mt-4">
            <Button
              text="Sign Up"
              loading={isPending}
              onPress={handleSubmit(handleSignUp)}
            />

            <Text className="text-center text-gray-400">
              Already have an account?{" "}
              <Link
                className="font-inter-semibold text-primary"
                href="/sign-in"
              >
                Sign In
              </Link>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
}
