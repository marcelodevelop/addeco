import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import HomeContainer from "components/HomeContainer"

const Home = () => {

    const token = useSelector(store => store.auth.token)
    const navigate = useNavigate()

    useEffect(() => {
        if(!token) {
            navigate("/signin")
        }
    }, [token])

    return (
        <HomeContainer/>
    )
}

export default Home