import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  resultContainer: {
    width: width * 0.8,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textResult: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
    paddingVertical: 5,
    marginVertical: 10,
  },
});
