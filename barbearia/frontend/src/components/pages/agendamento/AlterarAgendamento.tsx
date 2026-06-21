import { useEffect, useState } from "react";
import Agendamento from "../../../models/Agendamento";
import api from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";

function AlterarAgendamento(){
    const [situacao, setSituacao] = useState("");
    const [observacao, setObservacao] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    

    useEffect(() => {
        buscarAgendamentoAPI();
    }, [])

    async function buscarAgendamentoAPI(){
        try {
            const resposta = await api.get<Agendamento>(`/api/agendamentos/${id}`);

            setSituacao(String(resposta.data.situacao));
            setObservacao(String(resposta.data.observacao));
        } catch (error) {
            console.log(error);
        }
    }

    async function enviarAgendamentoAPI(e : any){
        e.preventDefault();
        
        try {
            const Agendamento : Agendamento = {
                situacao,
                observacao
            };

           const resposta = await api.put(`/api/agendamentos/${id}`, Agendamento);

            setSituacao("");
            setObservacao("");

            navigate("/");
        } catch (error) {
            console.log(error);
        }

    }

    return(
        <div className="AlterarAgendamento">
            <h1>Alterar Agendamento</h1>
            <form onSubmit={enviarAgendamentoAPI}>
                <div>
                    <label>Situacao:</label>
                    <input value={situacao} required type="text" onChange={
                        (e : any) => {setSituacao(e.target.value)}
                    }/>
                </div>
                <div>
                    <label>Observação:</label>
                    <input value={observacao} required type="text" onChange={
                        (e : any) => {setObservacao(e.target.value)}
                    }/>
                </div>
                <div>
                    <button type="submit">
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AlterarAgendamento;