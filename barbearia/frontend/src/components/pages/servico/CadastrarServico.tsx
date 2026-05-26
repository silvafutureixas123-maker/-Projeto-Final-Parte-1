import { AnyARecord } from "dns";
import { useEffect, useState } from "react";

function CadastrarServico() {
    const [nome, setNome] = useState("");
    
    function digitar(e : any) {
        setNome(e.target.value);
    }

    function enviar() {
        console.log("Servico cadastrado");
    }

    return (
        <div className="CadastrarServico">
            <h1>Cadastrar Serviço</h1>
            <form onSubmit={enviar}>
                <div>
                    <label>Nome: </label>
                    <input type="text" onChange={digitar}/>
                </div>
                <div>
                    <button type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CadastrarServico;