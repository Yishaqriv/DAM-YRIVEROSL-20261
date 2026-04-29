import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import space from '../../themes/space';

export const CalcButton = ({ label, onPress, type = 'dark' }) => {
  const bgColor =
    type === 'orange'
      ? colors.buttonOrange
      : type === 'light'
      ? colors.buttonLight
      : colors.buttonDark;

  const textColor =
    type === 'light' ? colors.textDark : colors.textPrimary;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: space.buttonSize,
    height: space.buttonSize,
    borderRadius: space.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    margin: space.xs,
  },
  label: {
    fontSize: 28,
    fontWeight: '400',
  },
});