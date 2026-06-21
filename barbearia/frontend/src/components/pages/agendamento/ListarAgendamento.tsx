import { useEffect, useState } from "react";
import api from "../../../services/api";
import Agendamento from "../../../models/Agendamento";
import Servico from "../../../models/Servico";
import { Link } from "react-router-dom";
import { getMensagemErro } from "../../../utils/erros";

function ListarAgendamento() {

    const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

    useEffect(() => {
        carregarAgendamentoAPI();
    }, [])

    async function carregarAgendamentoAPI(){
        try {
            const resposta = await api.get<Agendamento[]>("/api/agendamentos");

            for (const agendamento of resposta.data) {
                agendamento.nomeCliente = await buscarCliente(String(agendamento.idCliente));
                agendamento.nomeServico = await buscarServico(String(agendamento.idServico));
            }

            setAgendamentos(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function buscarCliente(id : string){
        try {
            const resposta = await api.get(`/api/clientes/${id}`);
            return resposta.data.nome;
        } catch(error) {
            console.log(error);
            alert(getMensagemErro(error));
            return "";
        }
    }

    async function buscarServico(id : string){
        try {
            const resposta = await api.get<Servico>(`/api/servicos/${id}`);
            return resposta.data.nome;
        } catch(error) {
            console.log(error);
            alert(getMensagemErro(error));
            return "";
        }
    }

    async function deletarAgendamento(id : string){
        try {
            const resposta = await api.delete(`/api/agendamentos/${id}`);
            carregarAgendamentoAPI();
        } catch(error) {
            console.log(error);
            alert(getMensagemErro(error));
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
                        <th>Deletar</th>
                        <th>Alterar</th>
                    </tr>
                </thead>

                <tbody>
                    {agendamentos.map((agendamento: any) => (
                        <tr key={agendamento.id}>
                            <td className="id">{agendamento.id}</td>
                            <td>{agendamento.nomeCliente}</td>
                            <td>{agendamento.nomeServico}</td>
                            <td  className="dateTime">{new Date(agendamento.dataCadastro).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"})}</td>
                            <td>{agendamento.situacao}</td>
                            <td>{agendamento.observacao}</td>
                            <td className="delAlt">
                                <button onClick={() => deletarAgendamento(agendamento.id)}>
                                    Deletar
                                </button>
                            </td>
                            <td className="delAlt">
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