import React from "react";
import { View, Text, Button, Image, Linking } from "react-native";

import { styles } from "./Styles";

import imgMyPicture from "../../../assets/pessoal.png";

import { LinkedinButton } from "../../components/LinkedinButton/Index";
import { GithubButton } from "../../components/GithubButton/Index";
import { InstaButton } from "../../components/InstaButton/Index";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <View style={styles.shadowContainer}>
          <Image style={styles.images} source={imgMyPicture} />
        </View>
        <Text style={styles.text}>Rafael Gasperin</Text>
      </View>
      <View style={styles.containerButtons}>
        <LinkedinButton />
        <GithubButton />
        <InstaButton />
      </View>
    </View>
  );
}
