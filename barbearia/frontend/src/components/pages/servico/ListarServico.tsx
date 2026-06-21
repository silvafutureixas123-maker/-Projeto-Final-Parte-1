import { useEffect, useState } from "react";
import api from "../../../services/api";
import Servico from "../../../models/Servico";
import { Link } from "react-router-dom";

function ListarServicos() {
    const [servicos, setServicos] = useState<Servico[]>([]);
    const borderStyle = { border: "1px solid black", padding: "3px" };

    useEffect(() => {
        carregarServicoAPI();
    }, [])

    async function carregarServicoAPI(){
        try {
            const resposta = await api.get<Servico[]>("/api/servicos");
            setServicos(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function deletarServico(id : string){
        try {
            const resposta = await api.delete(`/api/servicos/${id}`);
            carregarServicoAPI();
        } catch(error) {
            console.log(error);
        }
    }
    
    return (
        <div className="ListarServicos">
            <h1>Listar Serviços</h1>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th style={borderStyle}>#</th>
                        <th style={borderStyle}>Nome</th>
                        <th style={borderStyle}>Preço</th>
                        <th style={borderStyle}>Deletar</th>
                        <th style={borderStyle}>Alterar</th>
                    </tr>
                </thead>
                <tbody>
                    {servicos.map((servico : any) => (
                        <tr key={servico.id}>
                            <td style={borderStyle}>{servico.id}</td>
                            <td style={borderStyle}>{servico.nome}</td>
                            <td style={borderStyle}>{servico.preco}</td>
                            <td style={borderStyle}>
                                <button onClick={() => deletarServico(servico.id)}>
                                    Deletar
                                </button>
                            </td>
                            <td style={borderStyle}>
                                <Link to={`/pages/servico/alterar/${servico.id}`}>
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

export default ListarServicos;