export default interface Agendamento{
    id?: string;
    idServico?: string;
    idCliente?: string;
    dataCadastro?: Date;
    situacao?: string;
    observacao?: string;
}