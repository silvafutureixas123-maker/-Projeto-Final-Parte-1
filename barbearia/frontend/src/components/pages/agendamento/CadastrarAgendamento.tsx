import { useState } from "react";

function CadastrarAgendamento() {

    const [idCliente, setIdCliente] = useState("");
    const [idServico, setIdServico] = useState("");
    const [situacao, setSituacao] = useState("");
    const [observacao, setObservacao] = useState("");

    function enviar(e: any) {
        e.preventDefault();

        console.log({
            idCliente,
            idServico,
            situacao,
            observacao
        });
    }

    return (
        <div>
            <h1>Cadastrar Agendamento</h1>

            <form onSubmit={enviar}>

                <div>
                    <label>Id Cliente:</label>
                    <input
                        type="text"
                        onChange={(e) => setIdCliente(e.target.value)}
                    />
                </div>

                <div>
                    <label>Id Serviço:</label>
                    <input
                        type="text"
                        onChange={(e) => setIdServico(e.target.value)}
                    />
                </div>

                <div>
                    <label>Situação:</label>
                    <input
                        type="text"
                        onChange={(e) => setSituacao(e.target.value)}
                    />
                </div>

                <div>
                    <label>Observação:</label>
                    <input
                        type="text"
                        onChange={(e) => setObservacao(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Cadastrar
                </button>

            </form>
        </div>
    );
}

export default CadastrarAgendamento;