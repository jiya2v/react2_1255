import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        // eslint-disable-next-line
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">{input}</div>
      <div className="keypad">
        <div className="column">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
        </div>
        <div className="column">
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
        </div>
        <div className="column">
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
        <div className="column">
          <button onClick={() => handleButtonClick('C')}>⌫</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
          <button onClick={() => handleButtonClick('*')}>x</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;