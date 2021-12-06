import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text } from "react-native";
import { Modal, Button } from "@ui-kitten/components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ms, mvs } from "react-native-size-matters";
import { getDogImages, getDogSubLists } from "../../actions/DogDatasAction";

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
  console.log(DogSubLists, "DogSubLists");
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
      <Text style={styles.modalTxt}>Nama Anjing</Text>
      <Text style={styles.modalTxt2}>Nama Sub Anjing</Text>
      <Button style={styles.button} onPress={onClose}>
        Saya mengerti
      </Button>
    </Modal>
  );
};

export default ModalPicture;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: "white",
    height: hp("65%"),
    width: wp("92%"),
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  modalTxt: {
    fontSize: mvs(17),
    alignSelf: "center",
    fontWeight: "bold",
  },
  modalTxt2: {
    textAlign: "center",
    alignSelf: "center",
    lineHeight: mvs(22),
    maxWidth: ms(290),
  },
  button: {
    paddingHorizontal: ms(30),
  },
});
