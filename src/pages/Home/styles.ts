import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  waiting: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  options: {
    position: "absolute",
    right: 24,
    top: 100,
    zIndex: 1,
  },
  optionButton: {
    height: 48,
    width: 48,
    borderRadius: 28,
    backgroundColor: "#6f95a6",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: 60,
    bottom: 42,
    backgroundColor: "#6f95a6",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
