import { Fragment } from "react";

/* Components */
import { ReportsComponent } from "./subcomponents/reportsComponent/ReportsComponent";
import { StudentsComponent } from "./subcomponents/studentsComponent/StudentsComponent";

/* Styles */
import "./adminHome.scss";

export function AdminHome() {
    return (
        <Fragment>
            <div className="content-AdminHome">
                <div className="components-content">
                    <h1>Cohorts Activas</h1>
                    <StudentsComponent />
                    <ReportsComponent />
                </div>
            </div>
        </Fragment>
    );
}