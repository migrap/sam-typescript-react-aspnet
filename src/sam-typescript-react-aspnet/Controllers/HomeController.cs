using Microsoft.AspNet.Mvc;

namespace sam_typescript_react_aspnet.Controllers {
    public class HomeController : Controller {
        public IActionResult Index() {
            return View();
        }

        public IActionResult Error() {
            return View();
        }
    }
}