import styled from "styled-components";

export const LoadingBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
`;

export const LoadingBar = styled.div`
    width: 0;
    height: 2px;
    background-color: var(--clr-primary-main);
    animation: loadingAnimation 2.5s ease infinite;

    @keyframes loadingAnimation {
        00% {
            width: 0;
        }

        10% {
            transform: translateX(0);
        }

        100% {
            width: 100%;
            transform: translateX(100%);
        }
    }
`;
