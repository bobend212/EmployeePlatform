using AutoMapper;
using EmpPlatform_API.Dtos;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
<<<<<<< HEAD
            CreateMap<User, UserForListDto>();
            CreateMap<User, UsersForListDto>();

=======
>>>>>>> 1dcf708197b70c1e81204e7b7c00adca2224a422
            CreateMap<Timesheet, TimesheetForDetailedListDto>()
                .ForMember(dest => dest.WeekNo, opt =>
                    opt.MapFrom(src => src.DateAdded.CalculateWeekNumber()));
        }
    }
}