import { Pressable, PressableProps, ActivityIndicator } from "react-native";
import { twMerge } from "tailwind-merge";

import Text from "@/components/ui/Text";

type Size = "sm" | "md" | "lg";

const sizeStyles: Record<Size, { container: string; text: string }> = {
  sm: {
    container: "h-10 px-2",
    text: "text-base",
  },
  md: {
    container: "h-12 px-4",
    text: "text-lg",
  },
  lg: {
    container: "h-14 px-6",
    text: "text-xl",
  },
};

type ButtonProps = {
  text: string;
  size?: Size;
  loading?: boolean;
  containerClassName?: string;
  textClassName?: string;
} & PressableProps;

export default function Button({
  text,
  size = "md",
  loading,
  containerClassName,
  textClassName,
  ...rest
}: ButtonProps) {
  const containerClass = twMerge(
    "bg-primary justify-center items-center rounded-lg",
    sizeStyles[size].container,
    `${loading || rest.disabled ? "opacity-50" : "opacity-100"}`,
    containerClassName
  );

  const textClass = twMerge(
    "font-inter-semibold text-white",
    sizeStyles[size].text,
    textClassName
  );

  return (
    <Pressable className={containerClass} {...rest}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text className={textClass}>{text}</Text>
      )}
    </Pressable>
  );
}
