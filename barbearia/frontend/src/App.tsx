import React from 'react';
import ListarServicos from './components/pages/servico/ListarServico';
import CadastrarServico from './components/pages/servico/CadastrarServico';
import AlterarServico from './components/pages/servico/AlterarServico';
import ListaCliente from './components/pages/cliente/ListaCliente';
import CadastrarCliente from './components/pages/cliente/CadastrarCliente';
import AlterarCliente from './components/pages/cliente/AlterarCliente';
import ListarAgendamento from './components/pages/agendamento/ListarAgendamento';
import CadastrarAgendamento from './components/pages/agendamento/CadastrarAgendamento';
import AlterarAgendamento from './components/pages/agendamento/AlterarAgendamento';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "./styles/styles.css";

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
            <li>
              <Link to="/pages/cliente/cadastrar">Cadastrar Cliente</Link>
            </li>
            <li>
              <Link to="/pages/agendamento/cadastrar">Cadastrar Agendamento</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
              <>
                <ListarServicos/>
                <ListaCliente/>
                <ListarAgendamento/>
              </>
            } />
          <Route path="/pages/servico/cadastrar" element={<CadastrarServico/>} />
          <Route path="/pages/servico/alterar/:id" element={<AlterarServico/>} />
          <Route path="/pages/cliente/cadastrar" element={<CadastrarCliente/>} />
          <Route path="/pages/cliente/alterar/:id" element={<AlterarCliente/>} />
          <Route path="/pages/agendamento/cadastrar" element={<CadastrarAgendamento/>} />
          <Route path="/pages/agendamento/alterar/:id" element={<AlterarAgendamento/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;