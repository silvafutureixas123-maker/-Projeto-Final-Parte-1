import { useEffect, useState } from "react";

function ListarServicos() {
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5049/api/servicos")
            .then(resposta => {
                return resposta.json();
            }).then(dados => {
                setServicos(dados);
            });
    }, [])
    
    return (
        <div className="ListarServicos">
            <h1>Listar Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {servicos.map((servico : any) => (
                        <tr>
                            <td>{servico.nome}</td>
                            <td>{servico.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarServicos;