import { Link } from "react-router-dom";
import path from "../../../constants/path";
import styled from "styled-components";

const Logo = () => <LogoLink to={path.LANDING_PAGE}>Blogiver</LogoLink>;

const LogoLink = styled(Link)`
    color: white;
`;

export default Logo;
