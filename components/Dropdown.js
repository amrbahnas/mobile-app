import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const age = [
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
];

const Dropdown = ({ setselectedAge: setAge }) => {
  const [selectedAge, setSelectedAge] = useState(age[0].value);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (itemValue) => {
    setSelectedAge(itemValue);
    setAge(itemValue);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleOpen} style={styles.selectedAge}>
        <Icon
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={20}
          color="#333"
        />
        <Text style={styles.selectedItemText}>{selectedAge}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownContainer}>
          <ScrollView style={{ maxHeight: 200 }}>
            {age.map((item) => (
              <TouchableOpacity
                key={item.value}
                onPress={() => handleSelect(item.value)}
                style={styles.dropdownItem}
              >
                <Text style={styles.dropdownItemText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d9d9d9",
    borderRadius: 5,
    overflow: "hidden",
  },
  selectedAge: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedItemText: {
    fontSize: 18,
    textAlign: "right",
  },
  dropdownContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 2,
    marginTop: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dropdownItemText: {
    fontSize: 18,
    textAlign: "right",
  },
});

export default Dropdown;
