import { StyledCalculatorComponent } from './StyledCalculatorComponent.styled';
import ScreenComponent from './ScreenComponent/ScreenComponent';
import KeyboardComponent from './KeyboardComponent/KeyboardComponent';
import { useState } from 'react';

const CalculatorComponent = () => {
	
	const [input, setInput] = useState("")
	const [result, setResult] = useState("")
	
	return (
		<StyledCalculatorComponent>
            <ScreenComponent inputValue={input} resultValue={result}/>
			<KeyboardComponent setInput={setInput} setResult={setResult}/>
        </StyledCalculatorComponent>
	);
};

export default CalculatorComponent;
