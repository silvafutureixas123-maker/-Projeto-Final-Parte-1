import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AlterarCliente() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        buscarCliente();
    }, []);

    function buscarCliente() {
        fetch(`http://localhost:5049/api/clientes/${id}`)
            .then(resposta => resposta.json())
            .then(cliente => {
                setNome(cliente.nome);
                setEmail(cliente.email);
                setTelefone(cliente.telefone);
            });
    }

    function enviar(e: any) {
        e.preventDefault();

        fetch(`http://localhost:5049/api/clientes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                email,
                telefone
            })
        })
        .then(() => {
            navigate("/");
        });
    }

    return (
        <div>
            <h1>Alterar Cliente</h1>

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
                    Salvar
                </button>

            </form>
        </div>
    );
}

export default AlterarCliente;