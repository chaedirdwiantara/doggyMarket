import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("Home");
    }, 3000);
  }, []);

  return (
    <View style={styles.pages}>
      <Text>Splash Screen</Text>
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
