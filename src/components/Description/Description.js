const { StyledDescription } = require("./Description.styles")

const Description = ({ label }) => {
    return (
        <StyledDescription>
            {label}
        </StyledDescription>
    )
}

export default Description