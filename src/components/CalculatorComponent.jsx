import { StyledCalculatorComponent } from './StyledCalculatorComponent.styled';
import ScreenComponent from './ScreenComponent/ScreenComponent';
import KeyboardComponent from './KeyboardComponent/KeyboardComponent';

const CalculatorComponent = () => {
	return (
		<StyledCalculatorComponent>
            <ScreenComponent/>
			<KeyboardComponent/>
        </StyledCalculatorComponent>
	);
};

export default CalculatorComponent;
