import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { Modal } from "@ui-kitten/components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ms, mvs } from "react-native-size-matters";
import { getDogImages, getDogSubLists } from "../../actions/DogDatasAction";
import Gap from "../Kecil/Gap";
import ExpoFastImage from "expo-fast-image";

const ModalPicture = ({ open, onClose, data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (data != "") {
      dispatch(getDogImages(data));
      dispatch(getDogSubLists(data));
    }
  }, [data, dispatch]);

  const DogImage = useSelector(
    (state) => state.DogImagesReducer.getDogsImageResult
  );
  const DogSubLists = useSelector(
    (state) => state.DogListsReducer.getDogsSubListResult
  );
  // console.log(DogSubLists, "DogSubLists");
  // console.log(DogImage, "DogImage");

  return (
    <Modal
      visible={open}
      onRequestClose={onClose}
      style={styles.modalStyle}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <FlatList
        data={DogImage}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imgContainer}>
            <ExpoFastImage
              source={{ uri: item }}
              cacheKey={item}
              style={styles.gambar}
            />
          </View>
        )}
      />
      {DogSubLists.length >= 1 ? (
        <>
          <Gap height={15} />
          <View style={styles.subListContainer}>
            <FlatList
              data={DogSubLists}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.textContainer}>
                  <Text
                    style={{
                      color: "#60AF20",
                      fontWeight: "bold",
                      alignSelf: "center",
                    }}
                  >
                    {item.toUpperCase()}
                  </Text>
                </View>
              )}
            />
          </View>
        </>
      ) : null}
    </Modal>
  );
};

export default ModalPicture;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: "white",
    height: hp("70%"),
    width: wp("92%"),
    borderRadius: 20,
    alignItems: "center",
    padding: 15,
  },
  imgContainer: {
    marginBottom: 15,
    marginHorizontal: mvs(7),
    alignItems: "center",
  },
  gambar: {
    width: ms(140),
    height: mvs(90),
    borderRadius: 10,
    // resizeMode: "contain",
  },
  subListContainer: {
    height: "10%",
    paddingVertical: 5,
  },
  textContainer: {
    backgroundColor: "#F3F9EE",
    // width: ms(120),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#60AF20",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: ms(20),
    marginHorizontal: mvs(4),
  },
});
