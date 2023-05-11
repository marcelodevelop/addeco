import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setUser } from 'store/usersSlice'

import useGet from "hooks/useGet"

import UserCard from "components/UserCard"
import LogOut from 'components/LogOut'
import Spinner from "components/Spinner"

import { 
    CloseModal,
    StyledAvatar,
    StyledContainer, 
    StyledEmail, 
    StyledLink, 
    StyledModal,
    StyledName,
} from "./HomeContainer.styles"

const HomeContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store => store.users.users[0])

    const [data, setData] = useState()
    const [selectedUser, setSelectedUser] = useState()

    console.log(user)

    const { data: reqresData, error, isLoading } = useGet('https://reqres.in/api/users')

    const handleOnClick = id => {
        if(id) {
            setSelectedUser(id)
        }
    }

    const handleOnClose = () => {
        setSelectedUser(null)
    }

    const handleOnPostsClick = id => {
        if(id) {
            navigate(`/posts/${id}`)
        }
    }

    const renderModal = userSelected => {
        const findSelectedUser = user.filter(e => e.id === userSelected)
        
        return findSelectedUser && findSelectedUser.map(e => (
            <StyledModal key={e.email}>
                <CloseModal onClick={handleOnClose}>X</CloseModal>
                <StyledAvatar $background={e.avatar} />
                <StyledName>{e.first_name}{" "}{e.last_name}</StyledName>
                <StyledEmail>{e.email}</StyledEmail>
                <StyledLink onClick={() => handleOnPostsClick(e.id)}>POSTS</StyledLink>
            </StyledModal>
        ))


    }

    useEffect(() => {
        if(reqresData?.data) {
            setData(reqresData?.data)
        }
    }, [reqresData])

    useEffect(() => {
        if(data?.length) {
            dispatch(setUser(data))
        }
    }, [data])

    useEffect(() => {
        if(error) {
            console.log(error)
        }
    }, [error])

    return (
        <StyledContainer>
            <LogOut/>
            {isLoading && <Spinner/>}
            {!isLoading && user?.length && (
                user.map(data => (
                    <UserCard
                    key={data.email}
                    data={data}
                    onClick={() => handleOnClick(data.id)}
                    />
                ))
            )}
            {selectedUser && renderModal(selectedUser)}
        </StyledContainer>
    )
}

export default HomeContainer