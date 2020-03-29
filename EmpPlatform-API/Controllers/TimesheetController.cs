using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using EmpPlatform_API.Data;
using EmpPlatform_API.Dtos;
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

        public TimesheetController(ITimesheetRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTimesheet(int id)
        {
            var timesheets = await _repo.GetTimesheet(id);

            var timesheetsToReturn = _mapper.Map<IEnumerable<TimesheetForIndividualWeeklyDto>>(timesheets);

            return Ok(timesheetsToReturn);
        }

        [HttpPut("{id}/{timesheetId}")]
        public async Task<IActionResult> UpdateTimesheet(int id, int timesheetId, TimesheetForUpdateDto timesheetForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var timesheetFromRepo = await _repo.GetTimesheetById(id, timesheetId);

            _mapper.Map(timesheetForUpdateDto, timesheetFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating user ID: {id}, timesheet ID: {timesheetId} failed.");
        }
    }
}