import { StyledContainer } from "./LogOut.styles"
import { useDispatch } from "react-redux"

import { clearToken } from "store/authSlice"

const LogOut = () => {
    const dispatch = useDispatch()

    const handleOnClick = () => {
        dispatch(clearToken())
    }

    return (
        <StyledContainer onClick={handleOnClick}>
            Cerrar sesion
        </StyledContainer>
    )
}

export default LogOut