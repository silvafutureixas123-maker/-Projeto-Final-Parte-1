import { useState } from "react";
import api from "../../../services/api";

function CadastrarCliente() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    async function enviar(e: any) {
        e.preventDefault();

        try {

            const cliente = {
                nome,
                email,
                telefone
            };

            const resposta = await api.post("/api/clientes", cliente);

            setNome("");
            setEmail("");
            setTelefone("");

            console.log(resposta.data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Cadastrar Cliente</h1>

            <form onSubmit={enviar}>

                <div>
                    <label>Nome:</label>
                    <input
                        value={nome}
                        type="text"
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        value={email}
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Telefone:</label>
                    <input
                        value={telefone}
                        type="text"
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Cadastrar
                </button>

            </form>
        </div>
    );
}

export default CadastrarCliente;