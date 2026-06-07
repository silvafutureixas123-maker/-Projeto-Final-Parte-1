import React from 'react';

import ListarServicos from './components/pages/servico/ListarServico';
import CadastrarServico from './components/pages/servico/CadastrarServico';

import ListaCliente from './components/pages/cliente/ListaCliente';
import CadastrarCliente from './components/pages/cliente/CadastrarCliente';

function App() {
  return (
    <div className="App">
      <h1>Frontend v1</h1>

      <hr />

      <ListarServicos />
      <CadastrarServico />

      <hr />

      <ListaCliente />
      <CadastrarCliente />
    </div>
  );
}

export default App;