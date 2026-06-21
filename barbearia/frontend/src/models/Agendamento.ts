export default interface Agendamento{
    id?: string;
    idServico?: string;
    idCliente?: string;
    nomeServico?: string;
    nomeCliente?: string;
    dataCadastro?: Date;
    situacao?: string;
    observacao?: string;
}