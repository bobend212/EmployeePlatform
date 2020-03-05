using System.ComponentModel.DataAnnotations;

namespace EmpPlatform_API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 2, ErrorMessage = "You must specify password between 2 and 8 characters.")]
        public string Password { get; set; }
    }
}