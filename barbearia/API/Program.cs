using API.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var servicos = new List<Servico>();
var agendamentos = new List<Agendamento>();
var clientes = new List<Cliente>();

// Serviço
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

// Cliente
app.MapGet("/api/clientes", () =>
{
    return Results.Ok(clientes);
});

app.MapGet("/api/clientes/{id}", (string id) =>
{
    var cliente = clientes.FirstOrDefault(c => c.Id == id);

    if (cliente == null)
    {
        return Results.NotFound("Cliente não encontrado!");
    }

    return Results.Ok(cliente);
});

app.MapPost("/api/clientes", (Cliente cliente) =>
{
    if (clientes.Any(c => c.Email == cliente.Email))
    {
        return Results.Conflict("Cliente já cadastrado!");
    }

    clientes.Add(cliente);

    return Results.Created($"/api/clientes/{cliente.Id}", cliente);
});

app.MapPut("/api/clientes/{id}", (string id, Cliente clienteAtualizado) =>
{
    var cliente = clientes.FirstOrDefault(c => c.Id == id);

    if (cliente == null)
    {
        return Results.NotFound("Cliente não encontrado!");
    }

    cliente.Nome = clienteAtualizado.Nome;
    cliente.Email = clienteAtualizado.Email;
    cliente.Telefone = clienteAtualizado.Telefone;

    return Results.Ok(cliente);
});

app.MapDelete("/api/clientes/{id}", (string id) =>
{
    var cliente = clientes.FirstOrDefault(c => c.Id == id);

    if (cliente == null)
    {
        return Results.NotFound("Cliente não encontrado!");
    }

    clientes.Remove(cliente);

    return Results.NoContent();
});

// Agendamento
app.MapGet("/api/agendamentos", () =>
{
    return Results.Ok(agendamentos);
});

app.MapGet("/api/agendamentos/{id}", (string id) =>
{
    var agendamento = agendamentos.FirstOrDefault(s => s.Id == id);

    if (agendamento == null)
    {
        return Results.NotFound("Agendamento não encontrado!");
    }

    return Results.Ok(agendamento);
});

app.MapPost("/api/agendamentos", (Agendamento agendamento) =>
{
    agendamentos.Add(agendamento);

    return Results.Created("", agendamento);
});

app.MapPut("/api/agendamentos/{id}", (string id, Agendamento agendamentoAtualizado) =>
{
    var agendamento = agendamentos.FirstOrDefault(s => s.Id == id);

    if (agendamento == null)
    {
        return Results.NotFound("Agendamento não encontrado!");
    }

    agendamento.Situacao  = agendamentoAtualizado.Situacao ;

    return Results.Ok(agendamento);
});

app.Run();
