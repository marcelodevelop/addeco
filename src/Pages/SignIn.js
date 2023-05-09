import styled from "styled-components"

import SignInContainer from "components/SignInContainer"

const SignInLayout = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.blue};
    display: flex;
    align-items: center;
    justify-content: center;
`

const SignIn = () => {
    return (
        <SignInLayout>
            <SignInContainer/>
        </SignInLayout>
    )
}

export default SignIn