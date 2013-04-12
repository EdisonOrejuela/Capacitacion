using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TallerMVC.Models;

namespace TallerMVC.DataAccess
{
    interface IClientsProvider
    {
         List<Cliente> GetClients();
         void AddClient(Cliente cliente);
         void RemoveClient(string IdClient);
         void UpdateClient(Cliente clientToUpdate);
          

  

        
    }
}
