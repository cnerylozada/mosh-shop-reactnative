import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { palette, iconLibrary } from "../styles";
import ModalCategories from "./modalCategories";
import Icon from "./icon";

const InputPicker = ({
  iconName = iconLibrary.apps,
  placeholder,
  option,
  setOption,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <Icon name={iconName} size="caption" color={"gray"} />
          <Text
            style={[
              styles.option,
              { color: !!option ? palette.black : palette.gray },
            ]}
          >
            {!!option ? option.name : placeholder}
          </Text>
          <Icon name={iconLibrary.chevronDown} size="caption" color={"gray"} />
        </View>
      </TouchableWithoutFeedback>
      <ModalCategories
        isVisible={modalVisible}
        onVisible={setModalVisible}
        setOption={setOption}
      />
    </>
  );
};

export default InputPicker;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 35,
    alignItems: "center",
    backgroundColor: palette.light,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  option: {
    flex: 1,
    marginLeft: 5,
    textTransform: "capitalize",
  },
});
