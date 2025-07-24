import "../../global.css";

import { useEffect } from "react";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import useAuth from "@/hooks/useAuth";
import useCustomFonts from "@/hooks/useCustomFonts";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const { authLoaded } = useAuth();
  const { fontsLoaded, fontsError } = useCustomFonts();

  useEffect(() => {
    if (fontsError) throw fontsError;
    if (authLoaded && fontsLoaded) SplashScreen.hideAsync();
  }, [authLoaded, fontsLoaded, fontsError]);

  if (!authLoaded || !fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
