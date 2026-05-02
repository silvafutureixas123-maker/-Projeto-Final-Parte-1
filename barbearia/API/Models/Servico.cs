namespace API.Models;

public class Servico
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string? Nome {get; set; }
    public decimal Preco {get; set; }
    public int Duracao {get; set; }
}
