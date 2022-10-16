import { Fragment } from "react";

/* Styles */
import "./users.scss";

export function Users() {
    return (
        <div className="component-content">
            <h1>Users</h1>
            <nav class="navbar navbar-expand-lg">
                <div class="f-container">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <table class="table table-bordered">
                <thead className="table-light">
                    <tr>
                    <th scope="col">Speakers of the day</th>
                    <th scope="col">Betty Awards</th>
                    <th scope="col">Others</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">12 Sept, 26 Jun, ...</th>
                        <td>Haru Award, Chulls Award</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">15 Apr, 30 Sept, ...</th>
                        <td>Haru Award, Chulls Award</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">23 Jul, 5 Nov, ...</th>
                        <td >Haru Award, Chulls Award</td>
                        <td >The Bird</td>
                    </tr>
                    <tr>
                        <th scope="row">12 Sept, 26 Jun, ...</th>
                        <td>Haru Award, Chulls Award</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">15 Apr, 30 Sept, ...</th>
                        <td>Haru Award, Chulls Award</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">23 Jul, 5 Nov, ...</th>
                        <td >Haru Award, Chulls Award</td>
                        <td >The Bird</td>
                    </tr>
                    <tr>
                        <th scope="row">12 Sept, 26 Jun, ...</th>
                        <td>Haru Award, Chulls Award</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">15 Apr, 30 Sept, ...</th>
                        <td>Haru Award, Chulls Award</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">23 Jul, 5 Nov, ...</th>
                        <td >Haru Award, Chulls Award</td>
                        <td >The Bird</td>
                    </tr>
                </tbody>
            </table>

            <div className="buttons-content">
                <button type="button" class="btn btn-outline-primary">Nuevo</button>
                <div className="separator">&nbsp;</div>
                <button type="button" class="btn btn-outline-dark">Editar</button>
                <button type="button" class="btn btn-outline-danger">Eliminar</button>
            </div>
        </div>
    );
}