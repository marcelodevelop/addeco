import { StyledButton } from "./Button.styles"

const Button = ({ onClick, isLoading }) => {
    return (
        <StyledButton $isLoading={isLoading} onClick={onClick}>
            Sign In
        </StyledButton>
    )
}

export default Button