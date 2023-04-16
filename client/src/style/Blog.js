import styled from "styled-components";

const generateCategoryColor = (category, opacity) => {
    switch (category) {
        case "entertainment":
            return `rgba(0, 206, 209, ${opacity})`;
        case "sport":
            return `rgba(229, 89, 52, ${opacity})`;
        case "technical":
            return `rgba(0, 119, 200, ${opacity})`;
        case "educational":
            return `rgba(33, 150, 243, ${opacity})`;
        case "news":
            return `rgba(142, 68, 173, ${opacity})`;
        case "nature":
            return `rgba(57, 181, 74, ${opacity})`;
        default:
            return `rgba(128, 128, 128, ${opacity})`;
    }
};

export const BlogCategory = styled.span`
    padding: 0.4rem 0.8rem;
    letter-spacing: 1px;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 550;
    background-color: ${({ category }) => generateCategoryColor(category, 0.1)};
    color: ${({ category }) => generateCategoryColor(category, 1)};
`;
