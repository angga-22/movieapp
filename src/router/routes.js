import React from "react";
import { Layout } from 'antd';
import { Route } from "react-router-dom";
import Homepage from "../views/Homepage";
import Moviedetail from "../views/Moviedetail";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
export default () => {
    return (
        <><Layout>
            <header >
                <MainHeader />
            </header>
            <div>
                <Route path="/" exact component={Homepage} />
                <Route path="/:id" exact component={Moviedetail} />
            </div>
            <footer>
                <Footer />
            </footer>
        </Layout>
        </>
    )
}