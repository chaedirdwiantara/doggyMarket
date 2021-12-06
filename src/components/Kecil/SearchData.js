import React from "react";
import { StyleSheet, TextInput } from "react-native";

const SearchData = ({ onChange }) => {
  return <TextInput placeholder="search..." onChangeText={onChange} />;
};

export default SearchData;

const styles = StyleSheet.create({});
