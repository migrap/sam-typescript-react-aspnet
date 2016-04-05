using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;

namespace sam_typescript_react_aspnet {
    public class Startup {
        public Startup(IHostingEnvironment hosting, IApplicationEnvironment application) {
            var configurationBuilder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{hosting.EnvironmentName}.json", true)
                .AddEnvironmentVariables();
            Configuration = configurationBuilder.Build();
        }

        public IConfiguration Configuration { get; private set; }

        public void ConfigureServices(IServiceCollection services) {
            services.AddLogging();
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if(env.IsDevelopment()) {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseIISPlatformHandler();

            app.UseStaticFiles();

            app.UseMvc(routes => routes.MapRoute(name: "default", template: "{controller=Home}/{action=Index}/{id?}"));
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}