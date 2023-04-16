import styled from "styled-components";
import { Container } from "../../style/Container";

export const BlogDetailsPageContainer = styled(Container)`
    max-width: 1000px;
    padding: 3.2rem 1.6rem;
    font-size: 16px;
`;

export const Link = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: blue;
    }
`;

export const BackLinkWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.2rem;
`;

export const BackLinkContainer = styled.div`
    background-color: #f5f7f9;
    position: sticky;
    top: 0%;
    left: 0;
    right: 0;
`;

export const ArrowIcon = styled.span`
    margin-inline: 0.8rem;
    font-size: 1.4rem;
    color: #b0b0b0;
    font-weight: 500;
`;

export const DisabledLink = styled(Link)`
    text-transform: capitalize;
    cursor: initial;
    font-weight: 500;
    color: #707070;

    &:hover {
        color: #707070;
    }
`;

export const Header = styled.div`
    margin-bottom: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
`;

export const BlogTitle = styled.h1`
    width: 50ch;
`;

export const InformationBar = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
`;

export const CreatedOn = styled.span`
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    color: #909090;
`;

export const AuthorDiv = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: #707070;

    svg {
        width: 2rem;
        height: 2rem;
        fill: #707070;
    }
`;

export const BlogImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    overflow: hidden;
`;

export const BlogImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const Abstract = styled.p`
    width: 90ch;
    margin-block: 1.2rem 2.4rem;
    font-size: 1.4rem;
    line-height: 1.5;
    color: #707070;
`;

export const Content = styled.div`
    margin-top: 2.4rem;
    font-size: 1.8rem;

    p {
        color: #101010;
        line-height: 1.5;
    }
`;
