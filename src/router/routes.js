import React from "react";
import { Route } from "react-router-dom";
import Homepage from "../views/Homepage";
import SigninUp from "../views/Signin-up";
import ListAll from "../components/movie-list/ListAll";
import ListActions from "../components/movie-list/ListActions";
import ListAdventure from "../components/movie-list/ListAdventure";
import ListComedy from "../components/movie-list/ListComedy";
import ListScience from "../components/movie-list/ListScience";

export default () => {
    return (
        <>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={SigninUp} />
            <Route path="/all" exact component={ListAll} />
            <Route path="/adventure" exact component={ListAdventure} />
            <Route path="/actions" exact component={ListActions} />
            <Route path="/science" exact component={ListScience} />
            <Route path="/comedy" exact component={ListComedy} />

        </>
    )
}