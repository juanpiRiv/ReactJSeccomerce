import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/home";

export const MainRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />} />
                
                <Route path="/" element={ <NotFound />} />
            </Routes>
        </BrowserRouter>
    ) ;
};