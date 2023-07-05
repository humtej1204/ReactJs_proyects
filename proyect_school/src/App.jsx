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

/* Pages Views */
import { Home } from "./pages/home/home";
import { Matricula } from "./pages/matricula/matricula";
import { Nosotros } from "./pages/nosotros/nosotros";
import { InstitutionData } from "./pages/nosotros/subPages/institutionsData/institutionsData";
import { MisionVision } from "./pages/nosotros/subPages/mision-vision/MisionVision";
import { Institucion } from "./pages/institucion/institucion";
import { Noticias } from "./pages/institucion/subPages/noticias/Noticias";
import { SelectedNoticia } from "./pages/institucion/subPages/selectedNoticia/SelectedNoticia";
import { Eventos } from "./pages/institucion/subPages/eventos/Eventos";
import { SelectedEvento } from "./pages/institucion/subPages/selectedEvento/SelectedEvento";
import { Contactanos } from "./pages/contactanos/contactanos";
import { NotFoundPage } from "./pages/errorPages/notFound"

export function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AppContextProvider>
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
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:newsId" element={<SelectedNoticia />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/eventos/:eventId" element={<SelectedEvento />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <Footer />
        </AppContextProvider>
      </BrowserRouter>
    </Fragment>
  );
}