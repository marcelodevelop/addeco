import styled from "styled-components"

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 30px;
    padding: 15px;
    max-width: 400px;
    text-align: left;
`

export const StyledTitle = styled.span`
    font-size: ${({ theme }) => theme.sizes.turtle};
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
`

export const StyledBody = styled.p`
    font-size: ${({ theme }) => theme.sizes.bird};
    color: ${({ theme }) => theme.colors.darkgrey};
    font-weight: 400;
`