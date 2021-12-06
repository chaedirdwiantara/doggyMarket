import React from "react";
import { Provider } from "react-redux";
import { Home } from "./src/pages";
import store from "./src/reducers/store";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
