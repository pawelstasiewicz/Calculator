import { StyledKeyboardButtonComponent } from './StyledKeyboardButtonComponent.styled';

const KeyboardButtonComponent = (props) => {
	return (
		<StyledKeyboardButtonComponent>
			<p>{props.keyAction}</p>
		</StyledKeyboardButtonComponent>
	);
};

export default KeyboardButtonComponent;
