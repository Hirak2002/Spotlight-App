import { useAuth, useClerk, useSSO } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles/auth.styles";
import { Colors } from "../../constants/theme";

export default function LoginScreen() {
  const { startSSOFlow } = useSSO();
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  // Handle redirect when user is already signed in
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      console.log("User is signed in, redirecting to tabs...");
      router.replace("/(tabs)");
      setTimeout(() => {
        router.push("/(tabs)");
      }, 100);
    }
  }, [isLoaded, isSignedIn, router]);

  const handleGoogleSignIn = async () => {
    try {
      // Check if user is already signed in before starting OAuth flow
      if (isSignedIn) {
        console.log("User already signed in, skipping OAuth flow");
        return;
      }

      const { createdSessionId, setActive } = await startSSOFlow({ strategy: "oauth_google" });

      if (setActive && createdSessionId) {
        await setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (error: any) {
      console.error("OAuth error:", error);
      
      // Handle specific error cases
      if (error.message?.includes("already signed in")) {
        console.log("User already signed in, auth index will handle redirect");
      } else {
        Alert.alert("Sign In Error", "Failed to sign in. Please try again.");
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  // Don't show the sign-in button if user is already signed in
  if (isLoaded && isSignedIn) {
    return (
      <View style={styles.container}>
        <View style={styles.brandSection}>
          <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={32} color={Colors.primary} />
          </View>
          <Text style={styles.appName}>spotlight</Text>
          <Text style={styles.tagline}>already signed in</Text>
        </View>
        
        <View style={styles.loginSection}>
          <TouchableOpacity style={styles.googleButton} onPress={handleSignOut}>
            <View style={styles.googleIconContainer}>
              <Ionicons name="log-out-outline" size={20} color={Colors.light.text} />
            </View>
            <Text style={styles.googleButtonText}>Sign out and use different account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* BRAND SECTION */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={Colors.primary} />
        </View>
        <Text style={styles.appName}>spotlight</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
      </View>

      {/* ILLUSTRATION */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/images/Instant information-cuate.png")}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>

      {/* LOGIN SECTION */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={Colors.light.text} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
}
