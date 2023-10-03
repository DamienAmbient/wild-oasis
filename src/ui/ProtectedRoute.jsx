import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-500);
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    //1.Load auth user
    const { isLoading, isAuthenticated } = useUser();

    //2.If no auth user redirect to login page
    useEffect(
        function () {
            if (!isAuthenticated && !isLoading) navigate("/login");
        },
        [isAuthenticated, isLoading, navigate]
    );

    //3.Spinner while loading
    if (isLoading) return;
    <FullPage>
        <Spinner></Spinner>;
    </FullPage>;

    //4. If there is auth user - render the app
    if (isAuthenticated) return children;
}

export default ProtectedRoute;
