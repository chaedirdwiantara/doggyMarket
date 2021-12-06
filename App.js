import React from "react";
import { Provider } from "react-redux";
import { Home } from "./src/pages";
import store from "./src/reducers/store";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Home />
      </ApplicationProvider>
    </Provider>
  );
}
