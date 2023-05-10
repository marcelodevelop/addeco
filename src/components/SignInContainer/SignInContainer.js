import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import usePost from "hooks/useFetch"

import { setToken } from "store/authSlice";

import Input from "components/Input"
import Button from "components/Button"
import Title from "components/Title"
import Description from "components/Description"

import { StyledContainer } from "./SignInContainer.styles"

const SignInContainer = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [inputError, setInputError] = useState()
    const [password, setPassword] = useState("")

    const { data: success, error, isLoading, postData } = usePost('https://reqres.in/api/login', { email, password });

    const handleEmailChange = e => {
        const regex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

        if(regex.test(e.target.value)) {
            setEmail(e.target.value)
            setInputError(null)
        } else {
            setInputError({
                error: true,
                label: "Email invalido"
            })
        }
    }

    const handlePasswordChange = e => {
        if(e.target.value) {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = () => {
        if(password && email) {
            postData()
        }
    }

    useEffect(() => {
        if(success?.token) {
            dispatch(setToken(success?.token))
            navigate("/home")
        }
    }, [success])

    return (
        <StyledContainer>
            <Title label="Sign In"/>
            <Description label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel augue velit."/>
            <Input error={inputError} onBlur={handleEmailChange} type="text" placeholder="Email" errorLabel="Email incorrecto"/>
            <Input onBlur={handlePasswordChange} type="password" placeholder="Contraseña" errorLabel="Contraseña incorrecta"/>
            <Button onClick={handleSubmit}/>
            <Description size="small" label="Forgot your password?"/>
        </StyledContainer>
    )
}

export default SignInContainer