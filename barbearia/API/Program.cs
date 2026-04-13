using API.Models;

var servicos = new List<Servico>();

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/servicos", () =>
{
    return Results.Ok(servicos);
});

app.MapPost("/api/servicos", (Servico servico) =>
{
    if (servicos.Any(s => s.Nome == servico.Nome))
    {
        return Results.Conflict("Esse serviço já existe!");
    }
    servicos.Add(servico);

    return Results.Created("", servico);
});

app.Run();
