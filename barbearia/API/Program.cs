var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/servicos", () =>
{
    return "Lista de serviços";
});

app.Run();
