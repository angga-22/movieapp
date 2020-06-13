import React from "react";
import { Route } from "react-router-dom";
import Homepage from "../views/Homepage";
import SigninUp from "../views/Signin-up";
import Moviedetail from "../views/Moviedetail";

export default () => {
    return (
        <>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={SigninUp} />
            <Route path="/:movie" exact component={Moviedetail} />
        </>
    )
}