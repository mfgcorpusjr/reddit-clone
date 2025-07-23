import "../../global.css";

import { useEffect } from "react";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import useCustomFonts from "@/hooks/useCustomFonts";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { fontsLoaded, fontsError } = useCustomFonts();

  useEffect(() => {
    if (fontsError) throw fontsError;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded) return null;

  return <Slot />;
}
