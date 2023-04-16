import { Outlet } from "react-router-dom";

const PrivateRoute = ({ user }) => {
    return user && <Outlet />;
};

export default PrivateRoute;
