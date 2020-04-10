using System;
using System.ComponentModel.DataAnnotations;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 2, ErrorMessage = "You must specify password between 2 and 8 characters.")]
        public string Password { get; set; }
        [Required]
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        [Required]
        public string Firstname { get; set; }
        [Required]
        public string Lastname { get; set; }
        [Required]
        public DateTime HireDate { get; set; }
        [Required]
        public int DepartmentId { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }

        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}