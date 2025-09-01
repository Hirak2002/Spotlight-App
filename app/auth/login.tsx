import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { COLORS } from "../constants/theme.ts";
import { styles } from "../styles/auth.styles";

export default function Login() {
  return (
    <View style={styles.container}>
      {/* BRAND SECTION */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>

        <Text style={styles.appName}>spotlight</Text>
        <Text style={styles.tagline}>don’t miss anything</Text>
      </View>
    </View>
  );
}
