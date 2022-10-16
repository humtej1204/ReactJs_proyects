import React from "react";

/* Components */
// import { Header } from "../components/header/Header";

/* Styles */
import "./reportsComponent.scss";

export function ReportsComponent() {
    return (
        <div className="reports-content">
            <div className="caption-02">
                <span>
                    Jhon Smith Doe Report's
                </span>
                <button class="btn btn-outline-success" type="submit">
                    Add Report
                </button>
            </div>

            <table class="table table-bordered">
                <thead className="table-light">
                    <tr>
                    <th scope="col">Registro</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Calificacion</th>
                    <th scope="col">Total Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Speaker of the day</th>
                        <td>12 Sept, 26 Sept, ...</td>
                        <td>-0.25</td>
                        <td>83%</td>
                    </tr>
                    <tr>
                        <th scope="row">Pld</th>
                        <td>12 Sept, 26 Sept, ...</td>
                        <td>+0.5</td>
                        <td>97%</td>
                    </tr>
                    <tr>
                        <th scope="row">Speaker of the day</th>
                        <td >12 Sept, 26 Sept, ...</td>
                        <td >-1</td>
                        <td>90%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}