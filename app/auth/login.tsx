import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Colors } from "C:/Spotlight-App/constants/theme";
import { styles } from "C:/Spotlight-App/Styles/auth.styles.js";

export default function Login() {
  return (
    <View style={styles.container}>
      {/* BRAND SECTION */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={50} color={Colors.primary} />
        </View>

        <Text style={styles.appName}>spotlight</Text>
        <Text style={styles.tagline}>don’t miss anything</Text>
      </View>
    </View>
  );
}
