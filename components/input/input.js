import React from "react";
import { TextInput } from "react-native";
import { styles } from "./style";

export const Input = ({ style, ...props }) => {
  return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};
