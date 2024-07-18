import { StyledKeyboardButtonComponent } from './StyledKeyboardButtonComponent.styled';

const KeyboardButtonComponent = ({ value, onClick }) => {
    

    return (
        <StyledKeyboardButtonComponent onClick={() => onClick(value)}>
            <p>
			{value}	
			</p>
        </StyledKeyboardButtonComponent>
    );
};

export default KeyboardButtonComponent;
