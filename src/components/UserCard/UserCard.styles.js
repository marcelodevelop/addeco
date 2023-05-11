import styled from "styled-components"

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    margin: 0 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
`

export const StyledAvatar = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    background: ${({ $background, theme }) => $background ? `url(${$background})` : theme.colors.darkgrey};
    background-size: cover;
    background-position: center;
    border-radius: 100px;
`   

export const StyledName = styled.span`
    font-size: ${({ theme }) => theme.sizes.turtle};
    color: ${({ theme }) => theme.colors.blue};
    margin: 10px 0;
    font-weight: 600;
`

export const StyledEmail = styled.span`
    font-size: ${({ theme }) => theme.sizes.bird};
    color: ${({ theme }) => theme.colors.darkgrey};
    font-weight: 400;
`