using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Web;
using TallerMVC.Models;

namespace TallerMVC.DataAccess
{
    public class SQLClientProvider : IClientsProvider
    {

        public List<Models.Cliente> GetClients()
        {
            using (var db = new ClienteContext())
            {
                var query = from Cliente in db.Clientes select Cliente;
                return query.ToList();
            }
            
        }

        public void AddClient(Models.Cliente cliente)
        {
            using (var db = new ClienteContext())
            {
               
                db.Clientes.Add(cliente);
                Debug.WriteLine("Id ultimo cliente: "+cliente.id);
                db.SaveChanges();

                var query = db.Clientes.Where(c => 1 == 1).OrderByDescending(c => c.id).ToList();
                //Debug.WriteLine(query);
                foreach (Cliente item in query)
                {
                    Debug.WriteLine(item.id + " " + item.nombre + " " + item.email + " " + item.telefono + " " + item.descripcion);
                }
                
            }

          
        }

        public void RemoveClient(string IdClient)
        {
            using (var db = new ClienteContext()) {
                var id = IdClient;
              var registro = (from c in db.Clientes where c.id == id select c).Single();
              db.Clientes.Remove(registro);
              db.SaveChanges();
                        
            }

            
        }

        public void UpdateClient(Cliente clientToUpdate)
        {
            using (var db = new ClienteContext()) {

             var actualizar = (from c in db.Clientes where c.id == clientToUpdate.id select c).Single();
                actualizar.nombre = clientToUpdate.nombre;
                actualizar.email = clientToUpdate.email;
                actualizar.telefono = clientToUpdate.telefono;
                actualizar.descripcion = clientToUpdate.descripcion;
                db.SaveChanges();
                Debug.WriteLine(actualizar.id+"   "+actualizar.nombre+"   "+actualizar.email+"   "+actualizar.telefono+"  "+actualizar.descripcion);
            }
           
           
           
        
        }

   
        
     
    }
}