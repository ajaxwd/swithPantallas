import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Keyboard,
} from "react-native";
import { Card, Input, NumberContainer } from "../components";
import { colors } from "../constants/colors";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    color: colors.text,
    textAlign: "center",
    paddingVertical: 20,
    marginTop: 30,
  },
  inputContainer: {
    maxWidth: width * 8,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: colors.text,
    textAlign: "center",
    paddingVertical: 5,
  },
  input: {
    width: "100%",
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    maxWidth: 70,
    fontSize: 25,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    width: width / 1.5,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  summaryContainer: {
    width: "80%",
    height: 180,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 20,
  },
  summaryText: {
    fontSize: 18,
  },
});

export function StartGame({ onStartGame, onCompare }) {
  const [number, setNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [lessOrMore, setLessOrMore] = useState(false);

  const onHandleChange = (text) => {
    setNumber(text.replace(/[^0-9]/g, ""));
  };

  const onConfirm = () => {
    const chosenNumber = parseInt(number, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setNumber("");
  };

  const onReset = () => {
    setNumber("");
    setSelectedNumber(0);
    setConfirmed(false);
    Keyboard.dismiss();
  };

  const onHandleStartGame = () => {
    onStartGame(selectedNumber);
    onCompare(lessOrMore);
  };

  const comfirmedOutput = () =>
    confirmed && (
      <Card style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Tu seleccion</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Mayor"
          onPress={() => {
            onHandleStartGame();
            setLessOrMore(true);
          }}
          color={colors.primary}
        />
        <Button
          title="Menor"
          onPress={() => {
            onHandleStartGame();
            setLessOrMore(false);
          }}
          color={colors.primary}
        />
      </Card>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>start-game</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Elija un numero</Text>
        <Input
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleChange(text)}
          value={number}
        />
        <View style={styles.buttonContainer}>
          <Button title="Limpiar" onPress={onReset} color={colors.primary} />
          <Button
            title="Confirmar"
            onPress={onConfirm}
            color={colors.secondary}
          />
        </View>
      </Card>
      {comfirmedOutput()}
    </View>
  );
}