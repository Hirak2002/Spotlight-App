import { useClerk } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { Text, TouchableOpacity } from "react-native";

export default function SignOutButton() {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to the home page after sign out
      Linking.openURL(Linking.createURL("/"));
    } catch (err) {
      console.error("Sign-out error:", err);
    }
  };

  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Text>Sign out</Text>
    </TouchableOpacity>
  );
}
