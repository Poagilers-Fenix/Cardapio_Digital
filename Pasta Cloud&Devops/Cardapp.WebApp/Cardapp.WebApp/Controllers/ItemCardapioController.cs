using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Cardapp.WebApp.Models;
using System.Linq;
using System;
using Cardapp.WebApp.Repository.Context;

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
        public IActionResult Editar(int id)
        {
            var item = ctx.Item.Find(id);
            ViewBag.status = new List<string>(new string[] { "A", "D" });
            return View(item);
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

        [HttpPost]
        public IActionResult Editar(Item item)
        {
            try
            {
                Console.WriteLine(ctx.Item);
                var entry = ctx.Item.First(e => e.CodigoItem == item.CodigoItem);
                ctx.Entry(entry).CurrentValues.SetValues(item);
                ctx.SaveChanges();
                TempData["msg"] = "Conta atualizada!";
                return RedirectToAction("Index");
            }
            catch (Exception e)
            {
                Console.WriteLine("Deu erro");
                TempData["msg"] = "Problema ao atualizar a conta, veja se as informações estão corretas.";
                return RedirectToAction("Editar");
            }
        }


    }
}
