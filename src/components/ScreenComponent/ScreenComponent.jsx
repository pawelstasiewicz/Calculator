import { StyledScreenComponent } from "./StyledScreenComponent.styled"

const ScreenComponent = ({inputValue, resultValue}) => {
  return (
    <StyledScreenComponent>
        <input className="inputValue" type="text" value={inputValue} readOnly/>
        <input className="resultValue" type="text" value={resultValue} readOnly/>
    </StyledScreenComponent>
  )
}

export default ScreenComponent