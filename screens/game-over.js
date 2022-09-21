import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Card } from "../components/card";
import { styles } from "./style";
import { colors } from "../constants/colors";

export const GameOverScreen = ({ onRestart }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.resultContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/vector-gratis/juego-terminado-efecto-falla_225004-661.jpg?w=2000",
          }}
          style={styles.image}
        />

        <Text style={styles.textResult}>PERDISTE</Text>
        <Text style={styles.textResult}>El numero era: </Text>

        <Button title="Reiniciar" onPress={onRestart} color={colors.primary} />
      </Card>
    </View>
  );
};
