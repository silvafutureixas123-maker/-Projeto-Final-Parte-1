using API.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var servicos = new List<Servico>();

app.MapGet("/api/servicos", () =>
{
    return Results.Ok(servicos);
});

app.MapGet("/api/servicos/{id}", (string id) =>
{
    var servico = servicos.FirstOrDefault(s => s.Id == id);

    if (servico == null)
    {
        return Results.NotFound("Serviço não encontrado!");
    }

    return Results.Ok(servico);
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

app.MapPut("/api/servicos/{id}", (string id, Servico servicoAtualizado) =>
{
    var servico = servicos.FirstOrDefault(s => s.Id == id);

    if (servico == null)
    {
        return Results.NotFound("Serviço não encontrado!");
    }

    servico.Nome = servicoAtualizado.Nome;
    servico.Preco = servicoAtualizado.Preco;
    servico.Duracao = servicoAtualizado.Duracao;

    return Results.Ok(servico);
});

app.MapDelete("/api/servicos/{id}", (string id) =>
{
    var servico = servicos.FirstOrDefault(s => s.Id == id);

    if (servico == null)
    {
        return Results.NotFound("Serviço não encontrado!");
    }
    servicos.Remove(servico);

    return Results.NoContent();
});

app.Run();
