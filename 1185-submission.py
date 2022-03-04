class Solution:
    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
        import datetime
        import calendar
        dt = datetime.datetime(year,month,day)
        return calendar.day_name[dt.weekday()]
        
