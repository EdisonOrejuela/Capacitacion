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
            var prueba = new { id = "45", nombre = "cliente23", email = "cliente@cliente.com", telefono = "123456789", descripcion = "ninguna" };
            var lista= provider.GetClients();
             return Json(lista, JsonRequestBehavior.AllowGet);
            
        }

        public ActionResult AddClient(string id, string nombre, string email, string telefono, string descripcion) {
            var prueba = new Cliente{ id = "45", nombre = "cliente23", email = "cliente@cliente.com", telefono = "123456789", descripcion = "ninguna" };
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
       
        public ActionResult UpdateClient(Cliente clientToUpdate) {
            provider.UpdateClient(clientToUpdate);

            return new EmptyResult();
        }
        public JsonResult Diccionario() {
            Dictionary<string, List<Cliente>> dicc = new Dictionary<string, List<Cliente>>();
         //   dicc.Add("bogota", new Cliente{id="35",nombre="cliente4", ciudad="bogota"});
        //    dicc.Add("cali", new Cliente { id = "36", nombre = "cliente5", ciudad="cali" });
            List<Cliente> lista = new List<Cliente>();
            for (int i = 0; i < 100; i++)
            {
                lista.Add(new Cliente { id = "" + i, nombre = "cliente" ,ciudad=i%2==0?"bogota":"cali"});
                
            }
            foreach (var item in lista)
            {
                if (dicc.ContainsKey(item.ciudad))
                {
                    var clientesCiudad = dicc[item.ciudad];
                    clientesCiudad.Add(item);

                }
                else
                { 
                   var listaClienteCiudad= new List<Cliente>();
                   listaClienteCiudad.Add(item);
                   dicc.Add(item.ciudad, listaClienteCiudad);
                }
                
            }
            var clientesbogota = dicc["bogota"];

            return Json(clientesbogota, JsonRequestBehavior.AllowGet);
        
        }
       
        
           
    }
}
