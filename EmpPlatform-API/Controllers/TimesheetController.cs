using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using EmpPlatform_API.Data;
using EmpPlatform_API.Dtos;
using EmpPlatform_API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmpPlatform_API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TimesheetController : ControllerBase
    {
        private readonly ITimesheetRepository _repo;
        private readonly IMapper _mapper;
        private readonly IUserRepository _repoUser;

        public TimesheetController(ITimesheetRepository repo, IUserRepository repoUser, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
            _repoUser = repoUser;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTimesheet(int id)
        {
            var timesheets = await _repo.GetTimesheet(id);

            var timesheetsToReturn = _mapper.Map<IEnumerable<TimesheetForIndividualWeeklyDto>>(timesheets);

            return Ok(timesheetsToReturn);
        }

        [HttpPut("{timesheetId}")]
        public async Task<IActionResult> UpdateTimesheet(int timesheetId, TimesheetForUpdateDto timesheetForUpdateDto)
        {
            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var user = await _repoUser.GetUser(userId);

            var timesheetFromRepo = await _repo.GetTimesheetById(userId, timesheetId);

            _mapper.Map(timesheetForUpdateDto, timesheetFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating timesheet ID: {timesheetId} failed or unauthorized!");
        }

        [HttpPost]
        public async Task<ActionResult> PostTimesheet(Timesheet timesheetDto)
        {
            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            timesheetDto.UserId = userId;
            timesheetDto.DateAdded = DateTime.Now;

            _repo.Add<Timesheet>(timesheetDto);
            await _repo.SaveAll();

            return CreatedAtAction("GetTimesheet", new { id = timesheetDto.Id }, timesheetDto);
        }

        [HttpGet("projects")]
        public async Task<IActionResult> GetProjects()
        {
            var projects = await _repo.GetProjects();
            var projectsToReturn = _mapper.Map<IEnumerable<ProjectsForListDto>>(projects);
            return Ok(projectsToReturn);
        }

        [HttpGet("worktypes")]
        public async Task<IActionResult> GetWorkTypes()
        {
            var workTypes = await _repo.GetWorkTypes();
            var workTypesToReturn = _mapper.Map<IEnumerable<WorkTypesForListDto>>(workTypes);
            return Ok(workTypesToReturn);
        }

        // [HttpPost("register")]
        // public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        // {
        //     userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

        //     if (await _repo.UserExists(userForRegisterDto.Username))
        //         return BadRequest("Username already exist");

        //     var userToCreate = _mapper.Map<User>(userForRegisterDto);

        //     var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

        //     var userToReturn = _mapper.Map<UserForDetailedDto>(createdUser);

        //     return CreatedAtRoute("GetUser", new { controller = "Users", id = createdUser.Id }, userToReturn);
        // }
    }
}