import { useEffect, useState } from "react";
import api from "../../../services/api";
import Agendamento from "../../../models/Agendamento";

function ListarAgendamento() {

    const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

    useEffect(() => {
        carregarAgendamentoAPI();
    }, [])

    async function carregarAgendamentoAPI(){
        try {
            const resposta = await api.get<Agendamento[]>("/api/agendamentos");
            setAgendamentos(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="ListarAgendamentos">
            <h1>Listar Agendamentos</h1>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Cliente</th>
                        <th>Serviço</th>
                        <th>Data Cadastro</th>
                        <th>Situação</th>
                        <th>Observação</th>
                    </tr>
                </thead>

                <tbody>
                    {agendamentos.map((agendamento: any) => (
                        <tr key={agendamento.id}>
                            <td>{agendamento.id}</td>
                            <td>{agendamento.idCliente}</td>
                            <td>{agendamento.idServico}</td>
                            <td>{agendamento.dataCadastro}</td>
                            <td>{agendamento.situacao}</td>
                            <td>{agendamento.observacao}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default ListarAgendamento;