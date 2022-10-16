import { Fragment } from "react";

/* Components */
import { Users } from "./users/Users";

/* Styles */
import "./adminEdit.scss";

export function AdminEditUsers() {
    return (
        <Fragment>
            <div className="content-AdminEditUsers">
                <div className="components-content">
                    <div className="content-counters">
                        <div className="info-counter">
                            <span className="title">Total Users</span>
                            <span className="content">500</span>
                        </div>
                        <div className="info-counter">
                            <span className="title">Admin</span>
                            <span className="content">3</span>
                        </div>
                        <div className="info-counter">
                            <span className="title">Students</span>
                            <span className="content">497</span>
                        </div>
                    </div>
                    <hr />
                    <Users />
                </div>
            </div>
        </Fragment>
    );
}