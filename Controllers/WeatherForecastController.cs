using Microsoft.AspNetCore.Mvc;


// !!!!!!!!This file is currently unused
// !!!!!!!!This file is currently unused
// !!!!!!!!This file is currently unused
// !!!!!!!!This file is currently unused
namespace MyCommunityLandMark.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SiteController:ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Bingo", "Bengo", "Bango", "Bongo", "Dog", "Cat", "Fish", "Birb", "Duck", "Chicken"
    };

        private readonly ILogger<SiteController> _logger;

        public SiteController(ILogger<SiteController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1,5).Select(index => new WeatherForecast {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20,55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}