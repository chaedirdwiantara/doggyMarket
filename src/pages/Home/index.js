import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getDogLists } from "../../actions/DogDatasAction";
import ModalPicture from "../../components/Besar/ModalPicture";
import SearchData from "../../components/Kecil/SearchData";
import { chunk } from "../../utils";

const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const DogLists = useSelector(
    (state) => state.DogListsReducer.getDogsListResult
  );
  const Dogs = Object.keys(DogLists);

  useEffect(() => {
    dispatch(getDogLists());
  }, [dispatch]);

  //MODAL SETUP
  const [modalVisible, setModalVisible] = useState(false);
  const [sentDataToModal, setSentDataToModal] = useState("");
  const closeModalBack = () => {
    if (modalVisible != false) {
      setModalVisible(!modalVisible);
      return true;
    }
    return false;
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", closeModalBack);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", closeModalBack);
  }, [modalVisible]);
  //END OF MODAL SETUP

  return (
    <View style={styles.pages}>
      <SearchData onChange={(text) => setSearch(text)} />
      <FlatList
        data={Dogs?.filter((items) => {
          if (search == "") {
            return items;
          } else if (items?.toLowerCase().includes(search.toLowerCase())) {
            return items;
          }
        })}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              setSentDataToModal(item);
            }}
          >
            <Text>{item.toUpperCase()}</Text>
          </TouchableOpacity>
        )}
      />
      <ModalPicture
        open={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        data={sentDataToModal}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pages: {
    marginTop: 35,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
