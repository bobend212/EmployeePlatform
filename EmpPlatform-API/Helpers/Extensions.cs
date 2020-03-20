using System;
using System.Globalization;
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

        // public static DateTime GetDateFromWeekNumberAndDayOfWeek(int weekNumber, int dayOfWeek)
        // {
        //     DateTime jan1 = new DateTime(2012, 1, 1);
        //     int daysOffset = DayOfWeek.Tuesday - jan1.DayOfWeek;

        //     DateTime firstMonday = jan1.AddDays(daysOffset);

        //     var cal = CultureInfo.CurrentCulture.Calendar;
        //     int firstWeek = cal.GetWeekOfYear(jan1, CalendarWeekRule.FirstFourDayWeek, DayOfWeek.Monday);

        //     var weekNum = weekNumber;
        //     if (firstWeek <= 1)
        //     {
        //         weekNum -= 1;
        //     }

        //     var result = firstMonday.AddDays(weekNum * 7 + dayOfWeek - 1);
        //     return result;
        // }
    }
}