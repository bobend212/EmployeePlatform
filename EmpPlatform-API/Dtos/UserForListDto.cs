using System;
using System.Collections.Generic;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string DepartmentName { get; set; }
    }
}