def get_h_m_s(td):
    m, s = divmod(td.seconds, 60)
    h, m = divmod(m, 60)
    return h, m

class Solution:
    def convertTime(self, current: str, correct: str) -> int:
        current_h = int(current.split(":")[0])
        current_m = int(current.split(":")[1])
        correct_h = int(correct.split(":")[0])
        correct_m = int(correct.split(":")[1])
        from datetime import datetime, timedelta
        dt1 = timedelta(hours=current_h,minutes=current_m)
        dt2 = timedelta(hours=correct_h,minutes=correct_m)
        dt = dt2-dt1
        h,m = get_h_m_s(dt)
        count = h
        count += m//15
        m -= (m//15)*15
        count += m//5
        m -= (m//5)*5
        count += m
        return count
        
        
        

