import { StyledKeyboardComponent } from './StyledKeyboardComponent.styled';
import KeyboardButtonComponent from './KeyboardButtonComponent';
import { useState } from 'react';
useState;

const KeyboardComponent = ({ setInput, setResult }) => {
	const [localInput, setLocalInput] = useState('');

	const handleClick = (value) => {
		const newInput = localInput + value;
		setLocalInput(newInput);
		setInput(newInput);
	};

	const clearButton = () => {
		setInput('');
		setResult('');
		setLocalInput('');
	};

	const calculate = () => {
		try {
			const result = eval(localInput.replace('X', '*')).toString();
			setResult(result);
			setInput(result);
			setLocalInput(result);
		} catch (error) {
			setResult('Error');
		}
	};

	const handlePercentage = () => {
		try {
			const result = (parseFloat(localInput) / 100).toString();
			setLocalInput(result);
			setInput(result);
		} catch (error) {
			setResult('Error');
		}
	};

	const toggleSign = () => {
		try {
			const result = (parseFloat(localInput) * -1).toString();
			setLocalInput(result);
			setInput(result);
		} catch (error) {
			setResult('Error');
		}
	};

	return (
		<StyledKeyboardComponent>
			<KeyboardButtonComponent value='AC' onClick={clearButton} />
			<KeyboardButtonComponent value='+/-' onClick={toggleSign} />
			<KeyboardButtonComponent value='%' onClick={handlePercentage} />
			<KeyboardButtonComponent value='/' onClick={() => handleClick('/')} />
			<KeyboardButtonComponent value='7' onClick={() => handleClick('7')} />
			<KeyboardButtonComponent value='8' onClick={() => handleClick('8')} />
			<KeyboardButtonComponent value='9' onClick={() => handleClick('9')} />
			<KeyboardButtonComponent value='X' onClick={() => handleClick('*')} />
			<KeyboardButtonComponent value='4' onClick={() => handleClick('4')} />
			<KeyboardButtonComponent value='5' onClick={() => handleClick('5')} />
			<KeyboardButtonComponent value='6' onClick={() => handleClick('6')} />
			<KeyboardButtonComponent value='-' onClick={() => handleClick('-')} />
			<KeyboardButtonComponent value='1' onClick={() => handleClick('1')} />
			<KeyboardButtonComponent value='2' onClick={() => handleClick('2')} />
			<KeyboardButtonComponent value='3' onClick={() => handleClick('3')} />
			<KeyboardButtonComponent value='+' onClick={() => handleClick('+')} />
			<KeyboardButtonComponent value='0' onClick={() => handleClick('0')} />
			<div></div>
			<KeyboardButtonComponent value='.' onClick={() => handleClick('.')} />
			<KeyboardButtonComponent value='=' onClick={calculate} />
		</StyledKeyboardComponent>
	);
};

export default KeyboardComponent;
