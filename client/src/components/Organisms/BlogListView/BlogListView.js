import styled from "styled-components";
import { Container } from "../../../style/Container";
import { ReadMoreButton as ReadMore } from "../BogPost/BlogPost";

export const ListViewContainer = styled(Container)``;

export const ReadMoreButton = styled(ReadMore)`
    align-self: flex-end;
    padding-inline: 1.2rem;
    width: auto;
    pointer-events: none;
`;

export const DeleteButton = styled.div`
    background-color: #f5f5f5;
    color: #ababab;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 4px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 1.2rem;
    transition: all 200ms ease;

    svg {
        fill: #707070;
    }

    &:hover {
        background-color: rgb(255, 114, 111);
        color: white;

        svg {
            fill: white;
        }
    }
`;

export const ListViewWrapper = styled.div`
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 16px;
    border: 1px solid #f1f1f1;
    padding: 0.4rem;
    border-radius: 0.8rem;
    transition: all 200ms ease;
    cursor: pointer;
    height: max-content;

    &:hover {
        transform: scale(1.01);
        z-index: 99;
        transform-origin: top left;
        box-shadow: 0 0.5rem 2rem rgba(55, 84, 170, 0.2);
        border-color: transparent;

        ${ReadMoreButton} {
            background-color: #41b568;
            color: white;
        }
    }
`;

export const BlogImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    aspect-ratio: 3 / 2;
    overflow: hidden;
    border-radius: 4px;
`;

export const BlogImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-positin: center;
`;

export const BlogRight = styled.div`
    padding-top: 1.2rem;
    padding-bottom: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.8rem;
`;

export const BlogBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex: 1;
`;

export const ActionButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.6rem;
    width: 100%;
`;

export const BlogFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.4rem;
`;
