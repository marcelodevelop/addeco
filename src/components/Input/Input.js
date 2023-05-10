import { 
    StyledContainer, 
    StyledError, 
    StyledInput 
} from "./Input.styles"

const Input = ({ error, ...props }) => {
    return (
        <StyledContainer>
            <StyledInput {...props}/>
            {error && (
                <StyledError>{error.label}</StyledError>
            )}
        </StyledContainer>
    )
}

export default Input