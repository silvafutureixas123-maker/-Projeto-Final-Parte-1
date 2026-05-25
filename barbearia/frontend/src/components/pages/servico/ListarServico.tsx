import { useEffect } from "react";

function ListarServicos(){
    useEffect(() => {
        fetch("http://localhost:5049/api/servicos")
            .then(resposta => {
                return resposta.json();
            }).then(dados => {
                console.log(dados);
            });
    }, [])
    
    return (
        <div className="ListarServicos">
            <h1>Componente ListarServico</h1>
            <table></table>
        </div>
    );
}

export default ListarServicos;