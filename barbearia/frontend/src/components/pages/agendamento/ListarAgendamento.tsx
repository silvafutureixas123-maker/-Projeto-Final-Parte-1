import { useEffect, useState } from "react";

function ListarAgendamento() {

    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5049/api/agendamentos")
            .then(resposta => resposta.json())
            .then(dados => setAgendamentos(dados));
    }, []);

    return (
        <div>
            <h1>Listar Agendamentos</h1>

            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Serviço</th>
                        <th>Situação</th>
                    </tr>
                </thead>

                <tbody>
                    {agendamentos.map((agendamento: any) => (
                        <tr key={agendamento.id}>
                            <td>{agendamento.idCliente}</td>
                            <td>{agendamento.idServico}</td>
                            <td>{agendamento.situacao}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default ListarAgendamento;