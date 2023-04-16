import styled from "styled-components";
import { Container } from "../../style/Container";
import { Button } from "../../components";

export const Header = styled.div`
    background-color: #f5f7f9;
    height: 55vh;
    width: 100%;
    /* display: flex;
    justify-content: stretch;
    align-items: center; */
`;

export const HeaderContainer = styled(Container)`
    padding-inline: 1.6rem;
    display: flex;
    height: 100%;
    align-items: center;
`;

export const ContentLeft = styled.div`
    flex: 0.9;
    margin-top: -12rem;

    h1 {
        font-size: 3.6rem;
        width: 24ch;
        line-height: 1.3;

        span {
            background: -webkit-linear-gradient(180deg, #fc00ff, #00dbde);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;

export const ContentRight = styled.div`
    justify-self: flex-start;
    width: 400px;
    background-color: white;
    padding: 1.6rem;
    border-radius: 8px;
    box-shadow: 2px 4px 8px rgba(55, 84, 170, 0.16);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 8rem;

    h2 {
        font-size: 2.4rem;
        text-align: center;
    }
`;

export const SecondaryButton = styled(Button)`
    background: #ebedf0;
    color: black;
    box-shadow: none;
    letter-spacing: 1px;
    margin-top: 3.2rem;
    border: 1px solid transparent;

    &:hover {
        background: #e6e8eb;
        border: 1px solid #d5d5d5;
        box-shadow: 1px 2px 8px rgba(55, 84, 170, 0.08);
    }
`;
