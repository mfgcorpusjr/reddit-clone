import { useFonts } from "expo-font";

const useCustomFonts = () => {
  const [fontsLoaded, fontsError] = useFonts({
    "Inter-Light": require("@assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("@assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("@assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("@assets/fonts/Inter-Bold.ttf"),
  });

  return {
    fontsLoaded,
    fontsError,
  };
};

export default useCustomFonts;
