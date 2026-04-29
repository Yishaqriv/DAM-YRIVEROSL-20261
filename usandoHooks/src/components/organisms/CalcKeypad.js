import React from 'react';
import { View } from 'react-native';
import ButtonRow from '../molecules/ButtonRow';

const CalcKeypad = ({ onPress, onOperator, onEqual, onClear, onToggleSign, onPercent }) => {
  const rows = [
    [
      { label: 'AC', onPress: onClear, type: 'light' },
      { label: '+/-', onPress: onToggleSign, type: 'light' },
      { label: '%', onPress: onPercent, type: 'light' },
      { label: '÷', onPress: () => onOperator('/'), type: 'orange' },
    ],
    [
      { label: '7', onPress: () => onPress('7'), type: 'dark' },
      { label: '8', onPress: () => onPress('8'), type: 'dark' },
      { label: '9', onPress: () => onPress('9'), type: 'dark' },
      { label: '×', onPress: () => onOperator('*'), type: 'orange' },
    ],
    [
      { label: '4', onPress: () => onPress('4'), type: 'dark' },
      { label: '5', onPress: () => onPress('5'), type: 'dark' },
      { label: '6', onPress: () => onPress('6'), type: 'dark' },
      { label: '−', onPress: () => onOperator('-'), type: 'orange' },
    ],
    [
      { label: '1', onPress: () => onPress('1'), type: 'dark' },
      { label: '2', onPress: () => onPress('2'), type: 'dark' },
      { label: '3', onPress: () => onPress('3'), type: 'dark' },
      { label: '+', onPress: () => onOperator('+'), type: 'orange' },
    ],
    [
      { label: '0', onPress: () => onPress('0'), type: 'dark' },
      { label: '.', onPress: () => onPress('.'), type: 'dark' },
      { label: '=', onPress: onEqual, type: 'orange' },
    ],
  ];

  return (
    <View>
      {rows.map((row, i) => (
        <ButtonRow key={i} buttons={row} />
      ))}
    </View>
  );
};

export default CalcKeypad;