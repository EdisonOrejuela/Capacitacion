using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TallerMVC.Models;

namespace TallerMVC.Controllers
{
    public class ClientesController : Controller
    {
        //
        // GET: /Clientes/

        public ActionResult Clients()
        {
            return View();
        }

        public JsonResult GetClients() 
        {
            
            List<Cliente> lista= new List<Cliente>();

            for (int i = 0; i < 200; i++) {
                Cliente cliente;
                 cliente = new Cliente{ id = ""+i, nombre = "cliente"+i, email = "cliente"+i+"@cliente.com", telefono = "54548874", descripcion = "ninguna" };
                lista.Add(cliente);
            }
            
            return Json(lista, JsonRequestBehavior.AllowGet);
            
        }

        public ActionResult AddClient() {
            return new EmptyResult();
        }

        public ActionResult RemoveClient() {
            return View();
        }

    }
}
