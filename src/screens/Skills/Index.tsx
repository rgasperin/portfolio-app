import React from "react";
import { Image, Text, View } from "react-native";

import imgMyPicture from "../../../assets/pessoal.png";

import { styles } from "./Styles";

export function SkillScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <View style={styles.shadowContainer}>
          <Image style={styles.images} source={imgMyPicture} />
        </View>
        <Text style={styles.text}>Minhas Habilidades</Text>
      </View>
      <View style={styles.containerList}>
        <Text style={styles.textList}>HTML: ⭐⭐⭐⭐</Text>
        <Text style={styles.textList}>CSS: ⭐⭐⭐⭐</Text>
        <Text style={styles.textList}>JS: ⭐⭐⭐</Text>
        <Text style={styles.textList}>Laravel: ⭐⭐⭐</Text>
        <Text style={styles.textList}>React Native: ⭐⭐</Text>
        <Text style={styles.textList}>MySQL: ⭐⭐⭐</Text>
      </View>
    </View>
  );
}
