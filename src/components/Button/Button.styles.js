import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    padding: 13px 20px;
    width: 90%;
    background: ${({ theme }) => theme.colors.darkgrey};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.sizes.turtle};
    justify-content: center;
    font-weight: 600;
    opacity: ${({ $isLoading }) => $isLoading ? 0.5 : 1}
`