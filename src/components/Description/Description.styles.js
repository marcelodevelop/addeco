import styled from "styled-components";

export const StyledDescription = styled.span`
    color: ${({ theme }) => theme.colors.lightgrey};
    font-size: ${({ theme, size }) => size === "small" ? theme.sizes.bird : theme.sizes.turtle};
    text-align: center;
    margin-bottom: 10px;
`