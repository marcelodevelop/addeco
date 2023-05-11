import { 
    StyledAvatar, 
    StyledContainer, 
    StyledEmail, 
    StyledName
} from "./UserCard.styles"

const UserCard = ({ data, onClick }) => {
    const { email, first_name: firstName, last_name: lastName, avatar } = data || {}

    return (
        <StyledContainer onClick={onClick}>
            <StyledAvatar $background={avatar}/>
            <StyledName>
                {firstName}
                {" "}
                {lastName}
            </StyledName>
            <StyledEmail>{email}</StyledEmail>
        </StyledContainer>
    )
}

export default UserCard