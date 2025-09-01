import { Link } from "expo-router";
import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "C:/Spotlight-App/Styles/auth.styles.js";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <TouchableOpacity onPress={() => alert("Button Pressed")}>
        <Text>Press This</Text>
      </TouchableOpacity>
      <Pressable onPress={() => alert("Button Pressed")}>
        <Text>Press This Button</Text>
      </Pressable>
      <Image 
  source={{ uri: "https://picsum.photos/300/200" }} 
  style={{ width: 500, height: 200 }} 
  resizeMode="cover"
/>
      <Link href="/notifications">visit notification screen </Link>
    </View>
  );
}
