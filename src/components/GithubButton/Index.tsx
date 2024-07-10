import React from "react";
import { Button, Linking, Pressable, Text, View } from "react-native";

import { styles } from "./Styles";

export function GithubButton() {
  const openGithub = () => {
    Linking.openURL("https://github.com/rgasperin");
  };

  return (
    <Pressable style={styles.button} onPress={openGithub}>
      <Text style={styles.text}>Github</Text>
    </Pressable>
  );
}
