import { StyledKeyboardComponent } from './StyledKeyboardComponent.styled';
import KeyboardButtonComponent from './KeyboardButtonComponent';
import { useState } from 'react';
useState

const KeyboardComponent = ({setInput, setResult}) => {

    const [localInput, setLocalInput] = useState("")

    const handleClick = (value) =>{
        console.log(value)
        setLocalInput(localInput + value)
        setInput(localInput + value)
    }

    const clearButton = () =>{
        setInput("")
        setResult("")
        setLocalInput("")
    }

    const calculate = () =>{
        try {
            const result = eval(localInput).toString();
            setResult(result);
          } catch (error) {
            setResult("Error");
          }
          setInput(localInput);
        };  
    

	return (
        <StyledKeyboardComponent>
            <KeyboardButtonComponent value='AC' onClick={clearButton}/>
            <KeyboardButtonComponent value='+/-' onClick={() =>{}}/>
            <KeyboardButtonComponent value='%' onClick={() =>{}}/>
            <KeyboardButtonComponent value='/' onClick={handleClick}/>
            <KeyboardButtonComponent value='7' onClick={handleClick}/>
            <KeyboardButtonComponent value='8' onClick={handleClick}/>
            <KeyboardButtonComponent value='9' onClick={handleClick}/>
            <KeyboardButtonComponent value='*' onClick={handleClick}/>
            <KeyboardButtonComponent value='4' onClick={handleClick}/>
            <KeyboardButtonComponent value='5' onClick={handleClick}/>
            <KeyboardButtonComponent value='6' onClick={handleClick}/>
            <KeyboardButtonComponent value='-' onClick={handleClick}/>
            <KeyboardButtonComponent value='1' onClick={handleClick}/>
            <KeyboardButtonComponent value='2' onClick={handleClick}/>
            <KeyboardButtonComponent value='3' onClick={handleClick}/>
            <KeyboardButtonComponent value='+' onClick={handleClick}/>
            <KeyboardButtonComponent value='0' onClick={handleClick}/>
            <div></div>
            <KeyboardButtonComponent value='.' onClick={handleClick}/>
            <KeyboardButtonComponent value='=' onClick={calculate}/>
        </StyledKeyboardComponent>
        );
};

export default KeyboardComponent;
