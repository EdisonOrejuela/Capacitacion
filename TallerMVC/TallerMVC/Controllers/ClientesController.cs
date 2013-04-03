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
        IClientsProvider provider = new FakeClientsProvider();

        public ActionResult Clients()
        {
            return View();
        }

        public JsonResult GetClients() 
        {
            var lista= provider.GetClients();
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
