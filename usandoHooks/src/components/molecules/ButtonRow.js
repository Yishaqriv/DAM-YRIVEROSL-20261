import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CalcButton } from '../atoms/index';

const ButtonRow = ({ buttons }) => {
  return (
    <View style={styles.row}>
      {buttons.map((btn, index) => (
        <CalcButton
          key={index}
          label={btn.label}
          onPress={btn.onPress}
          type={btn.type}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 4,
  },
});

export default ButtonRow;