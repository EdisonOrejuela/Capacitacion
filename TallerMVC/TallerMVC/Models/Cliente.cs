using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TallerMVC.Models
{
    public class Cliente
    {
        public string id { get; set; }
        public string nombre { get; set; }
        public string email { get; set; }
        public string telefono { get; set; }
        public string descripcion { get; set; }
        public string ciudad { get; set; }

    }
}