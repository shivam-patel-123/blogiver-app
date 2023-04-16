import styled from "styled-components";
import { SignUpForm } from "../../components";
import { FormPageWrapper, FormWrapperContainer } from "../../style/Form";
import path from "../../constants/path";
import { Link } from "react-router-dom";

const SignUpPage = () => (
    <FormPageWrapper>
        <FormWrapperContainer>
            <FormTitle>Let's Create A New Account</FormTitle>
            <SignUpForm />
            <FooterLink>
                Already have an Account? <SecondaryLink to={path.LOGIN}>Login Now</SecondaryLink>
            </FooterLink>
        </FormWrapperContainer>
    </FormPageWrapper>
);

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

export default SignUpPage;
