using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TallerMVC.Models;

namespace TallerMVC.DataAccess
{
    public class FakeClientsProvider : IClientsProvider
    {
        static List<Cliente> clientes= new List<Cliente>();

        public List<Models.Cliente> GetClients()
        {
            /*if (clientes.Count == 0) {
                for (int i = 0; i < 200; i++)
                {
                    Cliente cliente;
                 cliente = new Cliente { id = "" + i, nombre = "cliente" + i, email = "cliente" + i + "@cliente.com", telefono = "54548874", descripcion = "ninguna" };
                    clientes.Add(cliente);
                }
            }*/

            return clientes;
        }

        public void AddClient(Models.Cliente cliente)
        {
            throw new NotImplementedException();
        }

        public void RemoveClient(string IdClient)
        {
            throw new NotImplementedException();
        }
    }
}