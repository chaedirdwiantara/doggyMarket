import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { getDogImages, getDogLists } from "../../actions/DogDatasAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogLists());
    dispatch(getDogImages());
  }, [dispatch]);

  return (
    <View style={styles.pages}>
      <Text>This's home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
