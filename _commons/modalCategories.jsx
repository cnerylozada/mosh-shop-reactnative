import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { palette } from "../styles";
import { categories } from "../utils/categoryData";
import Icon from "./icon";

const ModalCategories = ({ isVisible, onVisible }) => {
  return (
    <Modal alignItems="slide" visible={isVisible} transparent={true}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>Select a Category</Text>

          <View style={styles.itemContainer}>
            {categories.map((_) => {
              return (
                <TouchableOpacity key={_.id} onPress={() => onVisible(false)}>
                  <View style={styles.category}>
                    <Icon name={_.iconName} circled theme={_.color} />
                    <Text
                      style={{ textTransform: "capitalize", marginTop: 10 }}
                    >
                      {_.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCategories;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    flex: 1,
    backgroundColor: palette.white,
    marginTop: 50,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemContainer: {
    marginTop: 20,
    width: "90%",
    height: "50%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  category: {
    width: 100,
    alignItems: "center",
  },
});
