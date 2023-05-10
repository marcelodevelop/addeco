import { StyledButton } from "./Button.styles"

const Button = ({ onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            Sign In
        </StyledButton>
    )
}

export default Button