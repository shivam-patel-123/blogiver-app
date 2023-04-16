import styled from "styled-components";

export const ReadMoreButton = styled.button`
    outline: none;
    border: none;
    text-transform: uppercase;
    background-color: white;
    width: 100%;
    padding: 0.6rem;
    background-color: #f5f5f5;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ababab;
    cursor: pointer;
    transition: all 200ms ease;
    border-radius: 0.4rem;
    margin-top: auto;
    pointer-events: none;

    &:hover {
        background-color: #41b568;
        color: white;
    }
`;

export const BlogPostItem = styled.div`
    border: 1px solid #f1f1f1;
    padding: 0.4rem;
    border-radius: 0.8rem;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: white;

    &:hover {
        transform: scale(1.03);
        transform-origin: top left;
        box-shadow: 0 0.5rem 2rem rgba(55, 84, 170, 0.2);
        border-color: transparent;

        ${ReadMoreButton} {
            background-color: #41b568;
            color: white;
        }
    }
`;

export const BlogPostImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 4px;
`;

export const PostImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BlogPostBody = styled.div`
    padding: 0.6rem 0.8rem 1.6rem 0.8rem;
    flex: 1;
`;

export const BlogTitle = styled.h2`
    font-size: 1.8rem;
`;

export const BlogContent = styled.p`
    font-size: 1.2rem;
    color: #707070;
    line-height: 1.6;
`;

export const BlogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 0.4rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #ababab;
`;

export const BlogContentBody = styled.div`
    margin-top: 0.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding-inline: 0.4rem;
`;
