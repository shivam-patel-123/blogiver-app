import styled from "styled-components";
import { LoginForm } from "../../components";
import { FormPageWrapper, FormWrapperContainer } from "../../style/Form";
import { Link } from "react-router-dom";
import path from "../../constants/path";

const LoginPage = () => {
    return (
        <FormPageWrapper>
            <FormWrapperContainer>
                <FormTitle>Login Form</FormTitle>
                <LoginForm />
                <FooterLink>
                    Don't have an account? <SecondaryLink to={path.SIGN_UP}>Create Now</SecondaryLink>
                </FooterLink>
            </FormWrapperContainer>
        </FormPageWrapper>
    );
};

const FormTitle = styled.h2`
    font-size: 2.4rem;
`;

const FooterLink = styled.span`
    font-size: 1.4rem;
    color: #707070;
`;

const SecondaryLink = styled(Link)`
    color: blue;
    font-weight: 500;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export default LoginPage;
