import { useState } from "react";
import Servico from "../../../models/Servico";
import api from "../../../services/api";
import { getMensagemErro } from "../../../utils/erros";

function CadastrarServico() {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [duracao, setDuracao] = useState("");

    async function enviarServicoAPI(e : any){
        e.preventDefault();
        
        try {
            const servico : Servico = {
                nome,
                preco: Number(preco),
                duracao: Number(duracao)
            };

           const resposta = await api.post("/api/servicos", servico);

            setNome("");
            setPreco("");
            setDuracao("");

            console.log(resposta.data);
            alert("Serviço cadastrado com sucesso.");
        } catch (error) {
            console.log(error);
            alert(getMensagemErro(error));
        }
    }

    return (
        <div className="CadastrarServico">
            <h1>Cadastrar Serviço</h1>
            <form onSubmit={enviarServicoAPI}>
                <div  className="campo">
                    <label>Nome: </label>
                    <input value={nome} required type="text" onChange={
                        (e : any) => {setNome(e.target.value)}
                    }/>
                </div>
                <div  className="campo">
                    <label>Preço:</label>
                    <input value={preco} required type="text" onChange={
                        (e : any) => {setPreco(e.target.value)}
                    }/>
                </div>
                <div  className="campo">
                    <label>Duração(min):</label>
                    <input value={duracao} required type="text" onChange={
                        (e : any) => {setDuracao(e.target.value)}
                    }/>
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