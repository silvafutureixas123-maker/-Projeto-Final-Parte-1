import React from 'react';
import ListarServicos from './components/pages/servico/ListarServico';
import CadastrarServico from './components/pages/servico/CadastrarServico';
import ListaCliente from './components/pages/cliente/ListaCliente';
import CadastrarCliente from './components/pages/cliente/CadastrarCliente';
import ListarAgendamento from './components/pages/agendamento/ListarAgendamento';
import CadastrarAgendamento from './components/pages/agendamento/CadastrarAgendamento';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/servico/cadastrar">Cadastrar Serviço</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListarServicos/>} />
          <Route path="/pages/servico/cadastrar" element={<CadastrarServico/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;