using AutoMapper;
using EmpPlatform_API.Dtos;
using EmpPlatform_API.Models;

namespace EmpPlatform_API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.DepartmentName, opt =>
                {
                    opt.MapFrom(src => src.Department.DepartmentName);
                });

            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.DepartmentName, opt =>
                {
                    opt.MapFrom(src => src.Department.DepartmentName);
                });

            CreateMap<UserForUpdateDto, User>();

            CreateMap<Timesheet, TimesheetForDetailedListDto>()
                .ForMember(dest => dest.WeekNo, opt =>
                    opt.MapFrom(src => src.DateAdded.CalculateWeekNumber()));
        }
    }
}