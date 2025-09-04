import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../constants/theme"; // adjust path if needed

// get screen dimensions
const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  brandSection: {
    alignItems: "center",
    marginTop: height * 0.12, // ✅ works now
  },

  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "rgba(74, 222, 128, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  appName: {
    fontSize: 42,
    fontWeight: "700",
    fontFamily: "JetBrainsMono-Medium",
    color: Colors.light.tint, // ✅ or define Colors.primary in theme.js
    letterSpacing: 0.5,
    marginBottom: 8,
  },

  tagline: {
    fontSize: 16,
    color: Colors.light.icon, // ✅ fallback until you add grey in theme.js
    letterSpacing: 1,
    textTransform: "lowercase",
  },

  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },

  illustration: {
    width: width * 0.75,  // ✅ now defined
    height: width * 0.75, // ✅ now defined
    maxHeight: 280,
  },

  loginSection: {
    width: "100%",
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: "center",
  },

  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background, // ✅ instead of COLORS.white
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    marginBottom: 20,
    width: "100%",
    maxWidth: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },

  googleIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  googleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.text, // ✅ instead of COLORS.surface
  },

  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: Colors.light.icon, // ✅ instead of COLORS.grey
    maxWidth: 280,
  },
});
