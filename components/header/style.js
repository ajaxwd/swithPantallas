import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.text,
    textAlign: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 50,
    fontFamily: "Lato-Bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "White",
  },
});
