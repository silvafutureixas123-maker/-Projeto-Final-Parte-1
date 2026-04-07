using API.Models;

var servicos = new List<Servico>
{
    new() { Nome = "Barba" },
    new() { Nome = "Corte" }
};

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/servicos", () =>
{
    return servicos;
});

app.MapPost("/api/servicos", (Servico servico) =>
{
    servicos.Add(servico);
});

app.Run();
