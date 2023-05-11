import { useDispatch, useSelector } from 'react-redux'
import { once } from 'lodash'

import { setUser } from 'store/usersSlice'

import useGet from "hooks/useGet"

import UserCard from "components/UserCard"
import { useEffect, useState } from "react"

const { StyledContainer } = require("./HomeContainer.styles")

const HomeContainer = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.users.users[0])

    const [data, setData] = useState()

    const { data: reqresData, error, loading } = useGet('https://reqres.in/api/users')

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


    return (
        <StyledContainer>
            {user?.length ? (
                user.map(data => (
                    <UserCard
                    key={data.email}
                    data={data}
                    />
                ))
            ) : "Usuarios no encontrados"}
        </StyledContainer>
    )
}

export default HomeContainer