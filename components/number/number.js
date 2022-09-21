import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};
