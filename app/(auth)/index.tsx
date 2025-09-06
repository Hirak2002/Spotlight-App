import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  // ensure layout is mounted before navigation
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 0); 
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!ready || !isLoaded) return;

    if (isSignedIn) {
      router.replace("C:/Spotlight-App/app/(tabs)");
    } else {
      router.replace("C:/Spotlight-App/app/(auth)/login.tsx");
    }
  }, [ready, isLoaded, isSignedIn]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
