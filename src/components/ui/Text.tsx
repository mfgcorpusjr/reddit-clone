import { Text as RNText, TextProps } from "react-native";
import { twMerge } from "tailwind-merge";

export default function Text({ ...rest }: TextProps) {
  return (
    <RNText
      {...rest}
      className={twMerge("font-inter text-lg text-black", rest.className)}
    />
  );
}
