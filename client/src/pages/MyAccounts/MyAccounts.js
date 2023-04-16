import styled from "styled-components";
import { Container } from "../../style/Container";

export const MyAccountContainer = styled(Container)`
    padding-inline: 1.6rem;
`;

export const BlogsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
`;

export const MyAccountHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1.6rem;
`;

export const Title = styled.h1`
    font-size: 2.8rem;
    letter-spacing: -1px;
`;
