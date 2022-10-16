import React from "react";
import {
    Outlet
} from "react-router-dom";

/* Components */
import { Header } from "../components/header/Header";

/* Styles */
import "./layout.scss";

export function Layout() {
    return (
        <div className="layaout-content">
            <Header />
            <Outlet />
        </div>
    );
}