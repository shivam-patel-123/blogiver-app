import styled from "styled-components";
import { Container } from "../../style/Container";

export const BlogContainer = styled(Container)`
    padding: 1.6rem;
`;

export const BlogPostsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
`;

export const BlogsPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;
