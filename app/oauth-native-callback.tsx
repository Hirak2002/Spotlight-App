import { useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function OAuthNativeCallback() {
  const { handleRedirect } = useOAuth({ strategy: "oauth_google" });
  const router = useRouter();
  const [status, setStatus] = useState("Processing...");

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        setStatus("Completing sign in...");
        
        // Handle the OAuth redirect
        await handleRedirect();
        
        // If we get here, the OAuth was successful
        setStatus("Sign in successful! Redirecting...");
        setTimeout(() => {
          router.replace("/(tabs)");
        }, 500);
        
      } catch (error) {
        console.error("OAuth callback error:", error);
        
        // Only show failure if it's a real error, not just a redirect issue
        setStatus("Sign in failed. Redirecting to login...");
        setTimeout(() => {
          router.replace("/(auth)/login");
        }, 2000);
      }
    };

    handleOAuthCallback();
  }, [handleRedirect, router]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4ADE80" />
      <Text style={styles.text}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: "#333",
  },
});
