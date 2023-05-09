import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
`

export const StyledInput = styled.input`
    width: 100%;
    padding: 13px 10px;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.sizes.turtle};
    border: 2px solid ${({ theme }) => theme.colors.grey};
    outline: none;
    font-weight: medium;
`

export const StyledError = styled.span`
    font-size: ${({ theme }) => theme.sizes.bird};
    color: ${({ theme }) => theme.colors.error};
    margin-top: 2px;
`   