import { useEffect, useState } from "react";
import api from "../../../services/api";
import Servico from "../../../models/Servico";
import { Link } from "react-router-dom";

function ListarServicos() {
    const [servicos, setServicos] = useState<Servico[]>([]);

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
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Deletar</th>
                        <th>Alterar</th>
                    </tr>
                </thead>
                <tbody>
                    {servicos.map((servico : any) => (
                        <tr key={servico.id}>
                            <td>{servico.id}</td>
                            <td>{servico.nome}</td>
                            <td>{servico.preco}</td>
                             <td>
                                <button onClick={() => deletarServico(servico.id)}>
                                    Deletar
                                </button>
                            </td>
                            <td>
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