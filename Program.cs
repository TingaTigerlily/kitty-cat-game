var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles(new StaticFileOptions
{
    ServeUnknownFileTypes = true, // Allow serving files without a known content type
    DefaultContentType = "text/html" // Default to serving HTML files
});
app.UseDefaultFiles(); // Enable default file mapping (index.html)
app.UseStaticFiles();  // Enable serving static files

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

// Map a default route to serve index.html
app.MapFallbackToFile("index.html");

app.Run();
