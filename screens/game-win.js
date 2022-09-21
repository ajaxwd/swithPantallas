import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Card } from "../components/card";
import { styles } from "./style";
import { colors } from "../constants/colors";

export const GameWin = ({ onRestart }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.resultContainer}>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/thumbnails/000/628/329/small/hand_golden_cup_01.jpg",
          }}
          style={styles.image}
        />

        <Text style={styles.textResult}>GANASTE</Text>
        <Text style={styles.textResult}>El numero era: </Text>

        <Button title="Reiniciar" onPress={onRestart} color={colors.primary} />
      </Card>
    </View>
  );
};
