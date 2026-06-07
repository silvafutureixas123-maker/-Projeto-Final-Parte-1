import { useEffect, useState } from "react";

function ListaCliente() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5049/api/clientes")
            .then(resposta => resposta.json())
            .then(dados => setClientes(dados));
    }, []);

    return (
        <div>
            <h1>Listar Clientes</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </tr>
                </thead>

                <tbody>
                    {clientes.map((cliente: any) => (
                        <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefone}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default ListaCliente;