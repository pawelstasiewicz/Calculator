import { StyledScreenComponent } from "./StyledScreenComponent.styled"

const ScreenComponent = ({inputValue, resultValue}) => {
  return (
    <StyledScreenComponent>
        <input type="text" value={inputValue} readOnly/>
        <input type="text" value={resultValue} readOnly/>
    </StyledScreenComponent>
  )
}

export default ScreenComponent