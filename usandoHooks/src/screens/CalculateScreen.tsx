import React, { useState, useEffect } from 'react';
import CalcTemplate from '../components/templates/CalcTemplate';

const CalculateScreen = () => {
  const [display, setDisplay] = useState('0');
  const [firstValue, setFirstValue] = useState('');
  const [operator, setOperator] = useState('');
  const [waitingForSecond, setWaitingForSecond] = useState(false);
  const [expression, setExpression] = useState('');

  useEffect(() => {
    if (display.length > 9) {
      setDisplay(parseFloat(display).toExponential(2).toString());
    }
  }, [display]);

  const handlePress = (value: string) => {
    if (waitingForSecond) {
      setDisplay(value);
      setWaitingForSecond(false);
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };

  const handleOperator = (op: string) => {
    const opSymbol = op === '/' ? '÷' : op === '*' ? '×' : op === '-' ? '−' : '+';
    setFirstValue(display);
    setOperator(op);
    setWaitingForSecond(true);
    setExpression(`${display} ${opSymbol}`);
  };

  const handleEqual = () => {
    if (!operator || !firstValue) return;
    const a = parseFloat(firstValue);
    const b = parseFloat(display);
    let result = 0;

    if (operator === '+') result = a + b;
    else if (operator === '-') result = a - b;
    else if (operator === '*') result = a * b;
    else if (operator === '/') result = b !== 0 ? a / b : 0;

    const opSymbol = operator === '/' ? '÷' : operator === '*' ? '×' : operator === '-' ? '−' : '+';
    setExpression(`${firstValue} ${opSymbol} ${display} =`);
    setDisplay(result.toString());
    setFirstValue('');
    setOperator('');
    setWaitingForSecond(false);
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstValue('');
    setOperator('');
    setWaitingForSecond(false);
    setExpression('');
  };

  const handleToggleSign = () => {
    setDisplay((parseFloat(display) * -1).toString());
  };

  const handlePercent = () => {
    setDisplay((parseFloat(display) / 100).toString());
  };

  const handlers = {
    onPress: handlePress,
    onOperator: handleOperator,
    onEqual: handleEqual,
    onClear: handleClear,
    onToggleSign: handleToggleSign,
    onPercent: handlePercent,
  };

  return <CalcTemplate display={display} expression={expression} handlers={handlers} />;
};

export default CalculateScreen;