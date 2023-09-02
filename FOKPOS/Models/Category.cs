using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FOKPOS.Models
{
    public class Category
    {
        [Required]
        public string catId { get; set; }
        [Required]
        public string catName { get; set; }
    }
}
