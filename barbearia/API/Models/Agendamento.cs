namespace API.Models;

public class Agendamento
{
    public string? Id { get; set; } = Guid.NewGuid().ToString();
    public string? IdServico { get; set; }
    public string? IdCliente { get; set; }
    public DateTime DataCadastro { get; set; } = DateTime.Now;
    public int Situacao { get; set; }
}