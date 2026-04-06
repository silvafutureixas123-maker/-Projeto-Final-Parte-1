namespace API.Models;

public class Servico
{
    public required string Nome {get; set; }

    public decimal Preco {get; set; }
    
    public int Duracao {get; set; }
}
