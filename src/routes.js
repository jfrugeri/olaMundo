import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMIm";
import Menu from "./componentes/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      {/* Coisas fixas do nosso projeto */}
      <Menu />

      {/* Distribuicao de rotas do projeto */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Pagina nao encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
