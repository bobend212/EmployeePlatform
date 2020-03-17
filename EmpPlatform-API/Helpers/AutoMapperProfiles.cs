using AutoMapper;
using EmpPlatform_API.Dtos;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UsersForListDto>();

            CreateMap<Timesheet, TimesheetForDetailedListDto>()
                .ForMember(dest => dest.WeekNo, opt =>
                    opt.MapFrom(src => src.DateAdded.CalculateWeekNumber()));
        }
    }
}