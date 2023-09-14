import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
    return (
        <>
            <GlobalStyles></GlobalStyles>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout></AppLayout>}>
                        <Route
                            index
                            element={
                                <Navigate replae to="dashboard"></Navigate>
                            }
                        ></Route>
                        <Route
                            path="dashboard"
                            element={<Dashboard></Dashboard>}
                        ></Route>
                        <Route
                            path="bookings"
                            element={<Bookings></Bookings>}
                        ></Route>
                        <Route
                            path="cabins"
                            element={<Cabins></Cabins>}
                        ></Route>
                        <Route path="users" element={<Users></Users>}></Route>
                        <Route
                            path="settings"
                            element={<Settings></Settings>}
                        ></Route>
                        <Route
                            path="account"
                            element={<Account></Account>}
                        ></Route>
                    </Route>

                    <Route path="login" element={<Login></Login>}></Route>
                    <Route
                        path="#"
                        element={<PageNotFound></PageNotFound>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
