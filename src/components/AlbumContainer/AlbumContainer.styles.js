import styled from "styled-components"

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`

export const StyledAlbumContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;


    @media only screen and (min-width: 1000px) {
        width: 30%;
    }
`

export const AlbumPhoto = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 5px;
    margin: 10px 0px;
    background: ${({ $background, theme }) => $background ? `url(${$background})` : theme.colors.darkgrey};
    background-size: contain;
    background-position: center;
`

export const AlbumTitle = styled.span`
    font-size: ${({ theme }) => theme.sizes.turtle};
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 900;
    padding: 20px;
    margin: 20px;
    text-align: center;
`