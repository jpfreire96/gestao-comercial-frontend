import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cliente from "./pages/Cliente";
import Fornecedor from "./pages/Fornecedor";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Produto from "./pages/Produto";
import Relatorio from "./pages/Relatorio";
import Usuario from "./pages/Usuario";

function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}> </Route>
                <Route path="/cliente" element={<Cliente/>}> </Route>
                <Route path="/fornecedor" element={<Fornecedor/>}> </Route>
                <Route path="/menu" element={<Menu/>}> </Route>
                <Route path="/usuario" element={<Usuario/>}> </Route>
                <Route path="/produto" element={<Produto/>}> </Route>
                <Route path="/relatorio" element={<Relatorio/>}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;