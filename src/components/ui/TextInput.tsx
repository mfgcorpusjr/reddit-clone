import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { twMerge } from "tailwind-merge";

type Size = "sm" | "md" | "lg";

const sizeStyles: Record<Size, { container: string; text: number }> = {
  sm: {
    container: "py-2",
    text: 14,
  },
  md: {
    container: "py-3",
    text: 16,
  },
  lg: {
    container: "py-4",
    text: 18,
  },
};

type TextInputProps = {
  size?: Size;
} & RNTextInputProps;

export default function TextInput({ size = "md", ...rest }: TextInputProps) {
  const containerClass = twMerge(
    "border border-gray-300 rounded-lg font-inter text-black px-4",
    sizeStyles[size].container,
    rest.className
  );

  return (
    <RNTextInput
      style={{ fontSize: sizeStyles[size].text }}
      className={containerClass}
      {...rest}
    />
  );
}
