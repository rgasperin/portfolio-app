import React from "react";
import { Button, Linking, Pressable, Text, View } from "react-native";

import { styles } from "./Styles";

export function InstaButton() {
  const openInsta = () => {
    Linking.openURL("https://www.instagram.com/rafa_gasperin/");
  };

  return (
    <Pressable style={styles.button} onPress={openInsta}>
      <Text style={styles.text}>Instagram</Text>
    </Pressable>
  );
}
