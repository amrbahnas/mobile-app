import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Dropdown = ({ setValue, data, value, disabled }) => {
  const [selectedAge, setSelectedAge] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleSelect = (itemValue) => {
    setSelectedAge(itemValue);
    setValue(itemValue);
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, disabled && styles.disabled]}>
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
            {data.map((item) => (
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
  disabled: {
    opacity: 0.5,
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
