import { Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as AuthAPI from "@/api/auth";

export default function SignOutButton() {
  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to continue?", [
      { text: "Cancel" },
      { text: "Ok", style: "destructive", onPress: () => AuthAPI.signOut() },
    ]);
  };

  return (
    <Ionicons
      name="log-out-outline"
      size={24}
      color="black"
      onPress={handleSignOut}
    />
  );
}
