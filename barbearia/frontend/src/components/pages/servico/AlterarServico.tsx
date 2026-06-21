import { useEffect, useState } from "react";
import Servico from "../../../models/Servico";
import api from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { getMensagemErro } from "../../../utils/erros";


function AlterarServico(){
    const [nome, setNome] =  useState("");
    const [duracao, setDuracao] =  useState("");
    const [preco, setPreco] =  useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        buscarServicoAPI();
    }, [])

    async function buscarServicoAPI(){
        try {
            const resposta = await api.get<Servico>(`/api/servicos/${id}`);

            setNome(resposta.data.nome);
            setDuracao(resposta.data.duracao!.toString());
            setPreco(String(resposta.data.preco));
        } catch (error) {
            console.log(error);
            alert(getMensagemErro(error));
        }
    }

    async function enviarServicoAPI(e : any){
        e.preventDefault();
        
        try {
            const Servico : Servico = {
                nome,
                duracao: Number(duracao),
                preco: Number(preco)
            };

           const resposta = await api.put(`/api/servicos/${id}`, Servico);

            setNome("");
            setPreco("");
            setDuracao("");

            navigate("/");

            alert("Serviço alterado com sucesso!");
        } catch (error) {
            console.log(error);
            alert(getMensagemErro(error));
        }

    }

    return(
        <div className="AlterarServico">
            <h1>Alterar Serviço</h1>
            <form onSubmit={enviarServicoAPI}>
                <div  className="campo">
                    <label>Nome:</label>
                    <input value={nome} required type="text" onChange={
                        (e : any) => {setNome(e.target.value)}
                    }/>
                </div>
                <div  className="campo">
                    <label>Duracao:</label>
                    <input value={duracao} required type="text" onChange={
                        (e : any) => {setDuracao(e.target.value)}
                    }/>
                </div>
                <div  className="campo">
                    <label>Preço:</label>
                    <input value={preco} required type="text" onChange={
                        (e : any) => {setPreco(e.target.value)}
                    }/>
                </div>
                <div>
                    <button type="submit">
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AlterarServico;