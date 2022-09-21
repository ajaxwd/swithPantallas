import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Header } from "./components";
import { styles } from "./style";
import { GameWin, StartGame, GameOverScreen } from "./screens";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [compare, setCompare] = useState(false);
  const [loaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
  });

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onCompare = (lessOrMore) => {
    setCompare(lessOrMore);
  };

  const onRestartGame = () => {
    setUserNumber(0);
  };

  let title = "";
  let content = "";

  content = <StartGame onStartGame={onStartGame} onCompare={onCompare} />;

  if (
    (userNumber != 0 && userNumber > 30 && compare == true) ||
    (userNumber != 0 && userNumber < 30 && compare == false)
  ) {
    content = <GameWin onRestart={onRestartGame} />;
  } else if (
    (userNumber != 0 && userNumber < 30 && compare == true) ||
    (userNumber != 0 && userNumber > 30 && compare == false)
  ) {
    content = <GameOverScreen onRestart={onRestartGame} />;
  }

  title = "Numero Ganador";

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={title} />
      {content}
    </View>
  );
}
