import styled from "styled-components"

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    @media only screen and (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
    }
`