import { useState } from "react";
import Agendamento from "../../../models/Agendamento";
import api from "../../../services/api";

function CadastrarAgendamento() {

    const [idCliente, setIdCliente] = useState("");
    const [idServico, setIdServico] = useState("");
    const [situacao, setSituacao] = useState("");
    const [observacao, setObservacao] = useState("");

    async function enviarAgendamentoAPI(e : any){
        e.preventDefault();
        
        try {
            const agendamento : Agendamento = {
                idCliente,
                idServico,
                situacao,
                observacao
            };

           const resposta = await api.post("/api/agendamentos", agendamento);

            setIdCliente("");
            setIdServico("");
            setSituacao("");
            setObservacao("");

            console.log(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Cadastrar Agendamento</h1>

            <form onSubmit={enviarAgendamentoAPI}>
                <div>
                    <label>Id Cliente:</label>
                    <input value={idCliente} required type="text" onChange={
                        (e : any) => {setIdCliente(e.target.value)}
                    }/>
                </div>

                <div>
                    <label>Id Serviço:</label>
                    <input value={idServico} required type="text" onChange={
                        (e : any) => {setIdServico(e.target.value)}
                    }/>
                </div>

                <div>
                    <label>Situação:</label>
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

                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default CadastrarAgendamento;