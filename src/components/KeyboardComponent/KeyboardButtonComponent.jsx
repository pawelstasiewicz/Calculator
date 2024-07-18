import { StyledKeyboardButtonComponent } from './StyledKeyboardButtonComponent.styled';

const KeyboardButtonComponent = ({ value, onClick }) => {
    

    return (
        <StyledKeyboardButtonComponent value={value} onClick={() => onClick(value)}>
            {value}
        </StyledKeyboardButtonComponent>
    );
};

export default KeyboardButtonComponent;
