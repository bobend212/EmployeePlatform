using System;
using Microsoft.AspNetCore.Http;

namespace EmpPlatform_API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string msg)
        {
            response.Headers.Add("Application-Error", msg);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Controll-Allow-Origin", "*");
        }

        public static int CalculateWeekNumber(this DateTime theDateTime)
        {
            var weekNo = (theDateTime.DayOfYear / 7) + 1;

            return weekNo;
        }
    }
}