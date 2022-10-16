import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/* Assets */

/* Components */
import { Layout } from "./pages/Layout";
import { AdminHome } from "./pages/adminHome/AdminHome";
import { AdminEditUsers } from "./pages/adminEditUsers/AdminEditUsers";
import { NotFoundPage } from "./pages/notFoundPage/NotFoundPage";


export function App() {
  return (
    <BrowserRouter>
        
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AdminHome />} />
          <Route path="editUsers" element={<AdminEditUsers />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </BrowserRouter>
  );
}
