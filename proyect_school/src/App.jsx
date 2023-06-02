/* Libraries */
import React, { Fragment } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AppContextProvider } from './contexts/ContextProvider';

/* Components */
import { Header } from './components/header'
import { Footer } from "./components/footer";
import { Overlay } from "./components/overlay/Overlay";

/* Pages Views */
import { Home } from "./pages/home/home";
import { Institucion } from "./pages/institucion/institucion";
import { Matricula } from "./pages/matricula/matricula";
import { Nosotros } from "./pages/nosotros/nosotros";
import { Contactanos } from "./pages/contactanos/contactanos";
import { NotFoundPage } from "./pages/errorPages/notFound"

export function App() {
  return (
    <Fragment>
      <AppContextProvider>
        <Overlay></Overlay>
        
        <BrowserRouter>
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/matricula" element={<Matricula />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/institucion" element={<Institucion />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AppContextProvider>
    </Fragment>
  );
}