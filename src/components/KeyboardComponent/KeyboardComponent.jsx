import { StyledKeyboardComponent } from './StyledKeyboardComponent.styled';
import KeyboardButtonComponent from './KeyboardButtonComponent';

const KeyboardComponent = () => {
	return (
        <StyledKeyboardComponent>
            <KeyboardButtonComponent keyAction='AC'/>
            <KeyboardButtonComponent keyAction='+/-'/>
            <KeyboardButtonComponent keyAction='%'/>
            <KeyboardButtonComponent keyAction='/'/>
            <KeyboardButtonComponent keyAction='7'/>
            <KeyboardButtonComponent keyAction='8'/>
            <KeyboardButtonComponent keyAction='9'/>
            <KeyboardButtonComponent keyAction='X'/>
            <KeyboardButtonComponent keyAction='4'/>
            <KeyboardButtonComponent keyAction='5'/>
            <KeyboardButtonComponent keyAction='6'/>
            <KeyboardButtonComponent keyAction='-'/>
            <KeyboardButtonComponent keyAction='1'/>
            <KeyboardButtonComponent keyAction='2'/>
            <KeyboardButtonComponent keyAction='3'/>
            <KeyboardButtonComponent keyAction='+'/>
            <KeyboardButtonComponent keyAction='0'/>
            <KeyboardButtonComponent />
            <KeyboardButtonComponent keyAction=','/>
            <KeyboardButtonComponent keyAction='='/>
        </StyledKeyboardComponent>
        );
};

export default KeyboardComponent;
