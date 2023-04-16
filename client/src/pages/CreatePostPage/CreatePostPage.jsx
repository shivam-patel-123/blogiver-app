import styled from "styled-components";
import { CreatePostForm } from "../../components";
import { Container } from "../../style/Container";
import { FormWrapper } from "../../style/Form";

const CreatePostPage = () => {
    return (
        // <FormWrapper>
        <CreatePostFormContainer>
            <div>
                <Title>Create New Blog</Title>
            </div>
            <CreatePostForm />
        </CreatePostFormContainer>
        // </FormWrapper>
    );
};

const CreatePostFormContainer = styled(Container)`
    width: 1000px;
`;

export const Title = styled.h1`
    font-size: 2.8rem;
    letter-spacing: -1px;
    margin-bottom: 1.6rem;
    margin-top: 2rem;
`;

export default CreatePostPage;
