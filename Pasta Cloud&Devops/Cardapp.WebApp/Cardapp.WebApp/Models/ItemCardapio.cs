using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cardapp.WebApp.Models
{
    public class ItemCardapio
    {
        public string nome { get; set; }

        public string descricao { get; set; }

        public double valor { get; set; }

        public string ingredientes { get; set; }

        public double valorCalorico { get; set; }

        public Boolean destaque { get; set; }

        public string foto { get; set; }

    }
}
