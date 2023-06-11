/* Libraries */
import React, { Fragment } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AppContextProvider } from './contexts/ContextProvider';
import { ScrollToTop } from './util/ScrollToTop';

/* Components */
import { Header } from './components/header/header'
import { Footer } from "./components/footer/footer";
import { Overlay } from "./components/overlay/Overlay";

/* Pages Views */
import { Home } from "./pages/home/home";
import { Institucion } from "./pages/institucion/institucion";
import { Matricula } from "./pages/matricula/matricula";
import { Nosotros } from "./pages/nosotros/nosotros";
import { InstitutionData } from "./pages/nosotros/subPages/institutionsData/institutionsData";
import { MisionVision } from "./pages/nosotros/subPages/mision-vision/MisionVision";
import { Contactanos } from "./pages/contactanos/contactanos";
import { NotFoundPage } from "./pages/errorPages/notFound"

export function App() {
  return (
    <Fragment>
      <AppContextProvider>
        <Overlay></Overlay>
        
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/matricula" element={<Matricula />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/datosInstitucionales" element={<InstitutionData />} />
            <Route path="/misionVision" element={<MisionVision />} />
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