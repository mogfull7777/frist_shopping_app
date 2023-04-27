import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FindEmail from "./pages/FindEmail";
import ForgotPassword from "./pages/ForgotPassword";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Main />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/signup",
        element : <SignUp />
    },
    {
        path : "/find/email",
        element : <FindEmail />
    },
    {
        path : "/forgot/password",
        element : <ForgotPassword />
    }
])

export default Router;