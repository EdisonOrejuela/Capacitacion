using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TallerMVC.DataAccess;
using TallerMVC.Models;

namespace TallerMVC.Controllers
{
    public class ClientesController : Controller
    {
        //
        // GET: /Clientes/
        IClientsProvider provider = new SQLClientProvider();

        public ActionResult Clients()
        {
            return View();
        }

        public JsonResult GetClients() 
        {
            var lista= provider.GetClients();
             return Json(lista, JsonRequestBehavior.AllowGet);
            
        }

        public ActionResult AddClient(string id, string nombre, string email, string telefono, string descripcion) {
            Cliente cliente = new Cliente();
            cliente.id = id;
            cliente.nombre = nombre;
            cliente.email = email;
            cliente.telefono = telefono;
            cliente.descripcion = descripcion;
            provider.AddClient(cliente);
            

            return new EmptyResult();
        }

        public ActionResult RemoveClient(string id) {
            provider.RemoveClient(id);

            return new EmptyResult();
        }
       
        
           
    }
}
