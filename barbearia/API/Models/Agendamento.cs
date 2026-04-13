namespace API.Models;

public class Agendamento
{
    public long Id { get; set; }
    public long IdServico { get; set; }
    public long IdCliente { get; set; }
    public DateTime DataCadastro { get; set; } = DateTime.Now;
    public int Situacao { get; set; }
}