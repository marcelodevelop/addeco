import { StyledContainer } from "./SignInContainer.styles"

import Input from "components/Input"
import Button from "components/Button"
import Title from "components/Title"
import Description from "components/Description"

const SignInContainer = () => {
    return (
        <StyledContainer>
            <Title label="Sign In"/>
            <Description label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel augue velit."/>
            <Input type="text" placeholder="Email" errorLabel="Email incorrecto"/>
            <Input type="password" placeholder="Contraseña" errorLabel="Contraseña incorrecta"/>
            <Button/>
            <Description size="small" label="Forgot your password?"/>
        </StyledContainer>
    )
}

export default SignInContainer