import { 
    StyledContainer, 
    StyledError, 
    StyledInput 
} from "./Input.styles"

const Input = ({ error, errorLabel, ...props }) => {
    return (
        <StyledContainer>
            <StyledInput {...props}/>
            {error && (
                <StyledError>{errorLabel}</StyledError>
            )}
        </StyledContainer>
    )
}

export default Input