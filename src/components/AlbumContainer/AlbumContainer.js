import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import useGet from "hooks/useGet"

import Spinner from "components/Spinner"
import LogOut from "components/LogOut/LogOut"

import { 
    StyledAlbumContainer, 
    AlbumTitle, 
    StyledContainer, 
    AlbumPhoto
} from "./AlbumContainer.styles"

const AlbumContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const token = useSelector(store => store.auth.token)

    const [albumData, setAlbumData] = useState()

    const { data: photoData, error: photoError, isLoading: photoIsLoading } = useGet(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)

    useEffect(() => {
        if(photoError) {
            console.log(photoError)
        }
    }, [photoError])

    useEffect(() => {
        if(photoData) {
            setAlbumData(photoData)
        }
    }, [photoData])

    useEffect(() => {
        if(!token) {
            navigate("/signin")
        }
    })

    return (
        <StyledContainer>
            <LogOut/>
            {photoIsLoading && <Spinner/>}
            {!photoIsLoading && albumData?.length && albumData.map(e => (
                <StyledAlbumContainer key={e.title}>
                    <AlbumPhoto $background={e.url}/>
                    <AlbumTitle>{e.title}</AlbumTitle>
                </StyledAlbumContainer>
            ))}
        </StyledContainer>
    )
}

export default AlbumContainer