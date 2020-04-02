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
            CreateMap<TimesheetForUpdateDto, Timesheet>();

            CreateMap<Timesheet, TimesheetForIndividualWeeklyDto>()
                .ForMember(dest => dest.WeekNo, opt =>
                    opt.MapFrom(src => src.DateAdded.CalculateWeekNumber()))
                .ForMember(dest => dest.ProjectNumber, opt =>
                    opt.MapFrom(src => src.Project.ProjectNumber))
                .ForMember(dest => dest.ProjectName, opt =>
                    opt.MapFrom(src => src.Project.ProjectName))
                .ForMember(dest => dest.SiteName, opt =>
                    opt.MapFrom(src => src.Project.SiteName))
                .ForMember(dest => dest.WorkTypeName, opt =>
                    opt.MapFrom(src => src.WorkType.WorkTypeName))
                .ForMember(dest => dest.WorkTypeId, opt =>
                    opt.MapFrom(src => src.WorkType.WorkTypeId));

            CreateMap<Department, DepartmentsForListDto>();

            CreateMap<UserForRegisterDto, User>();

            CreateMap<Project, ProjectsForListDto>();
            CreateMap<WorkType, WorkTypesForListDto>();
        }
    }
}