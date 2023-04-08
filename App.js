import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Platform } from "react-native";
import { BaseTheme } from "./src/theme";
import config from "./nativebase.config";
import { Root } from "./src/components/RootComponent";

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={BaseTheme} config={config}>
      <Root />
    </NativeBaseProvider>
  );
}
