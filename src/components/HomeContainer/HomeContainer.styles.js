import styled from "styled-components"

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
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

export const StyledModal = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.colors.grey};

    @media only screen and (min-width: 1000px) {
        width: 40%;
    }
`

export const CloseModal = styled.div`
    width: 30px;
    height: 30px;
    font-size: ${({ theme }) => theme.sizes.turtle};
    font-weight: 900;
    color: ${({ theme }) => theme.colors.blue};
    position: absolute;
    display: flex;
    right: 10px;
    top: 10px;
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

export const StyledModalInputContainer = styled.div`
    display: flex;
    flex-direction: row;
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

export const StyledLink = styled.span`
    font-size: ${({ theme }) => theme.sizes.turtle};
    color: ${({ theme }) => theme.colors.blue};
    margin: 20px 0;
    font-weight: 900;
    cursor: pointer;
`