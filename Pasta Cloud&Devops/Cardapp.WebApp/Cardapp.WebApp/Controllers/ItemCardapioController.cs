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
            ViewBag.status = new List<string>(new string[] { "S", "N" });
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
                Console.WriteLine(item.Nome);
                //var entry = ctx.Item.SingleOrDefault(e => e.CodigoItem == item.CodigoItem);
                //Console.WriteLine("VAL depois: " + entry);
                //ctx.Entry(entry).CurrentValues.SetValues(item);
                var res = ctx.Item.Find(item.CodigoItem);
                Console.WriteLine(item.CodigoItem);
                Console.WriteLine(res);
                //ctx.Item.Update();
                ctx.SaveChanges();
                TempData["msg"] = "Item atualizado!";
                return RedirectToAction("Index");
            }
            catch (Exception e)
            {
                TempData["msg"] = "Problema ao atualizar a conta, veja se as informações estão corretas.";
                Console.WriteLine("Deu erro: " + e);
                return RedirectToAction("Editar");
            }
        }


    }
}
