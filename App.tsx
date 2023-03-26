import "react-native-reanimated";
import { StatusBar } from "react-native";

import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <>
      <StatusBar translucent barStyle="default" backgroundColor="transparent" />

      <Home />
    </>
  );
}
