import React from "react";

/* Components */
// import { Header } from "../components/header/Header";

/* Styles */
import "./studentsComponent.scss";

export function StudentsComponent() {
    return (
        <div className="component-content">
            <nav class="navbar navbar-expand-lg">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select a cohort</option>
                    <option value="1">16</option>
                    <option value="2">17</option>
                    <option value="3">18</option>
                    <option value="3">19</option>
                    <option value="3">20</option>
                </select>
                <div class="f-container">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div className="caption">Students - Cohort 17</div>

            <table class="table table-bordered">
                <thead className="table-light">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Total Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">010101</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <th scope="row">020202</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>117%</td>
                    </tr>
                    <tr>
                        <th scope="row">030303</th>
                        <td >Larry</td>
                        <td >The Bird</td>
                        <td>150%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}