import styled from 'styled-components'

export const StyledScreenComponent = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    position:relative;
    z-index: 10;
    
    .inputValue, .resultValue{
        background-color: transparent;
        border: none;
        color: #a2bbcf;
        width: 100px;
        margin: 10px 0;
    }

    .resultValue{
        color: #f0f0f0;
        font-size: 36px;
    }

`