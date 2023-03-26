import { useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View, Text } from "react-native";
import { runOnJS } from "react-native-reanimated";
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
  CameraPosition,
} from "react-native-vision-camera";
import { scanOCR } from "vision-camera-ocr";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { styles } from "./styles";

export function Home() {
  const [cameraPosition, setCameraPosition] = useState<CameraPosition>("back");
  const [text, setText] = useState<string>("");

  const devices = useCameraDevices();
  const device = cameraPosition === "back" ? devices.back : devices.front;

  const frameProcessor = useFrameProcessor((frame) => {
    "worklet";
    const data = scanOCR(frame);

    runOnJS(setText)(data.result.text);
  }, []);

  useEffect(() => {
    Camera.requestCameraPermission();
  }, []);

  function handleToggleCameraPosition() {
    setCameraPosition((prevState) => (prevState === "back" ? "front" : "back"));
  }

  if (!device) {
    return <ActivityIndicator color="blue" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={handleToggleCameraPosition}
        >
          <MaterialIcons name="flip-camera-ios" color="#FFF" size={24} />
        </TouchableOpacity>
      </View>

      <Camera
        style={styles.camera}
        isActive={true}
        device={device}
        frameProcessor={frameProcessor}
      />

      <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
