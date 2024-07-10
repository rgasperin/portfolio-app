import React from "react";
import { Button, Linking, Pressable, Text, View } from "react-native";

import { styles } from "./Styles";

export function LinkedinButton() {
  const openLinkedin = () => {
    Linking.openURL("https://www.linkedin.com/in/rafael-gasperin-018870231/");
  };

  return (
    <Pressable style={styles.button} onPress={openLinkedin}>
      <Text style={styles.text}>Linkedin</Text>
    </Pressable>
  );
}
