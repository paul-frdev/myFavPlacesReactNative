import { Pressable, StyleSheet, Text } from "react-native";
import React, { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

interface OutlinedButtonProps {
  children: ReactNode;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}
const OutlinedButton = ({ children, icon, onPress }: OutlinedButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons
        style={styles.icon}
        name={icon}
        size={18}
        color={Colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
