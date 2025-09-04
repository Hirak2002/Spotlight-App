import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import { Slot } from "expo-router";
import * as SecureStore from "expo-secure-store";
export default function Login() {
  const tokenCache = {
    async getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };
  
    return (
      <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
    >
      <Slot />
      </ClerkProvider>
    );

  
}
