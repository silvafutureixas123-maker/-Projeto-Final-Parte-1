import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

function ListaCliente() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        carregarClientes();
    }, []);

    function carregarClientes() {
        fetch("http://localhost:5049/api/clientes")
            .then(resposta => resposta.json())
            .then(dados => setClientes(dados));
    }

    function deletarCliente(id: string) {

        fetch(`http://localhost:5049/api/clientes/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            carregarClientes();
        });

    }

    return (
        <div>
            <h1>Listar Clientes</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Deletar</th>
                        <th>Alterar</th>
                    </tr>
                </thead>

                <tbody>
                    {clientes.map((cliente: any) => (
                        <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefone}</td>

                            <td>
                                <button
                                    onClick={() => deletarCliente(cliente.id)}
                                >
                                    Deletar
                                </button>
                            </td>

                            <td>
                                <Link to={`/pages/cliente/alterar/${cliente.id}`}>
                                        Alterar 
                                </Link>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default ListaCliente;