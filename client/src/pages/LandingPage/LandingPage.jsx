import { useNavigate } from "react-router-dom";
import { Button, SignUpForm } from "../../components";
import button from "../../components/Atoms/Button/constant";
import { Container } from "../../style/Container";
import { Title } from "../MyAccounts/MyAccounts";
import { ContentLeft, ContentRight, Header, HeaderContainer, SecondaryButton } from "./LandingPage";
import path from "../../constants/path";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <Header>
            <HeaderContainer>
                <ContentLeft>
                    <h1>
                        Create your <span>first blog</span> and reach a wider audience.
                    </h1>
                    <SecondaryButton
                        onClick={() => {
                            navigate(`${path.ALL_BLOGS}`);
                        }}
                    >
                        Read Blogs
                    </SecondaryButton>
                </ContentLeft>
                <ContentRight>
                    <h2>SignUp Form</h2>
                    <SignUpForm />
                </ContentRight>
            </HeaderContainer>
        </Header>
    );
};

export default LandingPage;
