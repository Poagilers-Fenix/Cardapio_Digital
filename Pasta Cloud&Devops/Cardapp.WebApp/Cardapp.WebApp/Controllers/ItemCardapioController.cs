using DimDim.WebApp.Repository.Context;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Cardapp.WebApp.Models;
using System.Linq;

namespace Cardapp.WebApp.Controllers
{
    public class ItemCardapioController : Controller
    {
        private static DataBaseContext ctx = new DataBaseContext();

        public IActionResult Index()
        {
            ViewBag.itens = ctx.Item.ToList<Item>();
            return View();
        }
        public IActionResult Login()
        {
            return RedirectToAction("Index");
        }
        public IActionResult Pratos()
        {
            return View();
        }
        public IActionResult Bebidas()
        {
            return View();
        }
        public IActionResult Lanches()
        {
            return View();
        }
        public IActionResult Sobremesas()
        {
            return View();
        }
        public IActionResult Editar()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(int id)
        {
            var conta = ctx.Item.Find(id);
            ctx.Item.Remove(conta);
            ctx.SaveChanges();
            TempData["msg"] = "Item Removido!";
            return RedirectToAction("Index");

        }



    }
}
