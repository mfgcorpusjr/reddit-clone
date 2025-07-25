import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { twMerge } from "tailwind-merge";

type Size = "sm" | "md" | "lg";

type TextInputProps = {
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & RNTextInputProps;

export default function TextInput({
  size = "md",
  leftIcon,
  rightIcon,
  ...rest
}: TextInputProps) {
  const sizeStyles: Record<
    Size,
    { textInput: string; fontSize: number; leftIcon: string; rightIcon: string }
  > = {
    sm: {
      textInput: twMerge(
        "px-4 py-2",
        leftIcon ? "pl-12" : "",
        rightIcon ? "pr-12" : ""
      ),
      fontSize: 14,
      leftIcon: "absolute left-2",
      rightIcon: "absolute right-2",
    },
    md: {
      textInput: twMerge(
        "px-4 py-3",
        leftIcon ? "pl-12" : "",
        rightIcon ? "pr-12" : ""
      ),
      fontSize: 16,
      leftIcon: "absolute left-3",
      rightIcon: "absolute right-3",
    },
    lg: {
      textInput: twMerge(
        "px-4 py-4",
        leftIcon ? "pl-12" : "",
        rightIcon ? "pr-12" : ""
      ),
      fontSize: 18,
      leftIcon: "absolute left-4",
      rightIcon: "absolute right-4",
    },
  };

  const textInputClass = twMerge(
    "w-full border border-gray-300 rounded-lg font-inter text-black",
    sizeStyles[size].textInput,
    rest.className
  );

  return (
    <View className="flex-row items-center">
      {leftIcon && (
        <View className={sizeStyles[size].leftIcon}>{leftIcon}</View>
      )}
      <RNTextInput
        style={{ fontSize: sizeStyles[size].fontSize }}
        className={textInputClass}
        {...rest}
      />
      {rightIcon && (
        <View className={sizeStyles[size].rightIcon}>{rightIcon}</View>
      )}
    </View>
  );
}
