import { useState } from "react";

function CadastrarCliente() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    function enviar(e: any) {
        e.preventDefault();

        console.log({
            nome,
            email,
            telefone
        });
    }

    return (
        <div>
            <h1>Cadastrar Cliente</h1>

            <form onSubmit={enviar}>

                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Telefone:</label>
                    <input
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