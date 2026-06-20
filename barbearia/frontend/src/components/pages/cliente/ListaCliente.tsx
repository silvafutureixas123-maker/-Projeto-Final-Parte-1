import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";

function ListaCliente() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        carregarClientes();
    }, []);

    async function carregarClientes() {
        try {
            const resposta = await api.get("/api/clientes");
            setClientes(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function deletarCliente(id: string) {

        try {

            await api.delete(`/api/clientes/${id}`);
            carregarClientes();

        } catch (error) {
            console.log(error);
        }

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