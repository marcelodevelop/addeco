import styled from "styled-components"

export const StyledSpinner = styled.div`
    @keyframes animationSpinner {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    width: 70px;
    height: 70px;
    border-top: 5px solid ${({ theme }) => theme.colors.blue};
    border-bottom: 5px solid ${({ theme }) => theme.colors.blue};
    border-left: 5px solid ${({ theme }) => theme.colors.blue};
    border-radius: 100px;
    animation: animationSpinner 2s linear infinite;
`