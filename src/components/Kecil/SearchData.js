import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const SearchData = ({ onChange }) => {
  const [search, setSearch] = useState("");
  return <TextInput placeholder="search..." onChangeText={onChange} />;
};

export default SearchData;

const styles = StyleSheet.create({});
