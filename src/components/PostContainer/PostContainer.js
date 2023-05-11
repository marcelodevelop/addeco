import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from "react-redux"

import useGet from 'hooks/useGet'

import LogOut from 'components/LogOut'
import Post from 'components/Post'
import Spinner from 'components/Spinner'

import { 
    StyledPostsContainer 
} from './PostContainer.styles'

const PostContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const token = useSelector(store => store.auth.token)

    const { data, error, isLoading } = useGet(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

    useEffect(() => {
        if(error) {
            console.log(error)
        }
    }, [error])

    useEffect(() => {
        if(!token) {
            navigate("/signin")
        }
    }, [token])


    return (
        <StyledPostsContainer>
            <LogOut/>
            {isLoading && <Spinner/>}
            {!isLoading && data && data.map(post => (
                <Post data={post}/>
            ))}
        </StyledPostsContainer>
    )
}

export default PostContainer