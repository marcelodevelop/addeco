import { 
    StyledTitle,
    StyledBody, 
    StyledContainer 
} from "./Post.styles"

const Post = ({ data }) => {
    const { title, body } = data || {}

    return (
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledBody>
                {body}
            </StyledBody>
        </StyledContainer>
    )
}

export default Post