import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../services/api";

function AlterarCliente() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        buscarCliente();
    }, []);

    async function buscarCliente() {

        try {

            const resposta = await api.get(`/api/clientes/${id}`);

            setNome(resposta.data.nome);
            setEmail(resposta.data.email);
            setTelefone(resposta.data.telefone);

        } catch (error) {
            console.log(error);
        }

    }

    async function enviar(e: any) {

        e.preventDefault();

        try {

            const cliente = {
                nome,
                email,
                telefone
            };

            await api.put(`/api/clientes/${id}`, cliente);

            navigate("/");

        } catch (error) {
            console.log(error);
        }

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