import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";

function ListaCliente() {

    const [clientes, setClientes] = useState([]);
    const borderStyle = { border: "1px solid black", padding: "3px" };

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

            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th style={borderStyle}>#</th>
                        <th style={borderStyle}>Nome</th>
                        <th style={borderStyle}>Email</th>
                        <th style={borderStyle}>Telefone</th>
                        <th style={borderStyle}>Deletar</th>
                        <th style={borderStyle}>Alterar</th>
                    </tr>
                </thead>

                <tbody>
                    {clientes.map((cliente: any) => (
                        <tr key={cliente.id}>
                            <td style={borderStyle}>{cliente.id}</td>
                            <td style={borderStyle}>{cliente.nome}</td>
                            <td style={borderStyle}>{cliente.email}</td>
                            <td style={borderStyle}>{cliente.telefone}</td>

                            <td style={borderStyle}>
                                <button
                                    onClick={() => deletarCliente(cliente.id)}
                                >
                                    Deletar
                                </button>
                            </td>

                            <td style={borderStyle}>
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