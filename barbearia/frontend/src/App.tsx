import React from 'react';
import ListarServicos from './components/pages/servico/ListarServico'; 
import CadastrarServico from './components/pages/servico/CadastrarServico';

function App() {
  return (
    <div className="App">
      <h1>Frontend v1</h1>
      <ListarServicos/>
      <CadastrarServico/>
    </div>
  );
}


export default App;