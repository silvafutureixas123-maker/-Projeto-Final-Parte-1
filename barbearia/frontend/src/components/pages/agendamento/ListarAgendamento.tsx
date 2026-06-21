import { useEffect, useState } from "react";
import api from "../../../services/api";
import Agendamento from "../../../models/Agendamento";
import Servico from "../../../models/Servico";
import { Link } from "react-router-dom";

function ListarAgendamento() {

    const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
    const borderStyle = { border: "1px solid black", padding: "3px" };

    useEffect(() => {
        carregarAgendamentoAPI();
    }, [])

    async function carregarAgendamentoAPI(){
        try {
            const resposta = await api.get<Agendamento[]>("/api/agendamentos");

            for (const agendamento of resposta.data) {
                agendamento.nomeCliente = await carregarCliente(String(agendamento.idCliente));
                agendamento.nomeServico = await carregarServico(String(agendamento.idServico));
            }

            setAgendamentos(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function carregarCliente(id : string){
        try {
            const resposta = await api.get(`/api/clientes/${id}`);
            return resposta.data.nome;
        } catch(error) {
            console.log(error);
            return "";
        }
    }

    async function carregarServico(id : string){
        try {
            const resposta = await api.get<Servico>(`/api/servicos/${id}`);
            return resposta.data.nome;
        } catch(error) {
            console.log(error);
            return "";
        }
    }

    async function deletarAgendamento(id : string){
        try {
            const resposta = await api.delete(`/api/agendamentos/${id}`);
            carregarAgendamentoAPI();
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="ListarAgendamentos">
            <h1>Listar Agendamentos</h1>

            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th style={borderStyle}>#</th>
                        <th style={borderStyle}>Cliente</th>
                        <th style={borderStyle}>Serviço</th>
                        <th style={borderStyle}>Data Cadastro</th>
                        <th style={borderStyle}>Situação</th>
                        <th style={borderStyle}>Observação</th>
                        <th style={borderStyle}>Deletar</th>
                        <th style={borderStyle}>Alterar</th>
                    </tr>
                </thead>

                <tbody>
                    {agendamentos.map((agendamento: any) => (
                        <tr key={agendamento.id}>
                            <td style={borderStyle}>{agendamento.id}</td>
                            <td style={borderStyle}>{agendamento.nomeCliente}</td>
                            <td style={borderStyle}>{agendamento.nomeServico}</td>
                            <td style={borderStyle}>{new Date(agendamento.dataCadastro).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"})}</td>
                            <td style={borderStyle}>{agendamento.situacao}</td>
                            <td style={borderStyle}>{agendamento.observacao}</td>
                            <td style={borderStyle}>
                                <button onClick={() => deletarAgendamento(agendamento.id)}>
                                    Deletar
                                </button>
                            </td>
                            <td style={borderStyle}>
                                <Link to={`/pages/agendamento/alterar/${agendamento.id}`}>
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

export default ListarAgendamento;