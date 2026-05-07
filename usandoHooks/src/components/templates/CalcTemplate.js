import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../../themes/colors';
import CalcKeypad from '../organisms/CalcKeypad';

const CalcTemplate = ({ display, expression, handlers }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{display}</Text>
      </View>
      <CalcKeypad {...handlers} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  display: {
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  expression: {
    fontSize: 22,
    color: '#888',
    marginBottom: 4,
  },
  result: {
    fontSize: 64,
    fontWeight: '200',
    color: colors.textPrimary,
  },
});

export default CalcTemplate;