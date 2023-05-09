import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 90%;
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    height: max-content;
    border-radius: 5px;

    @media only screen and (min-width: 768px) {
        width: 70%;
    }

    @media only screen and (min-width: 1200px) {
        width: 30%;
    }
`