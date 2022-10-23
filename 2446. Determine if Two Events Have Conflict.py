from datetime import datetime
class Solution:
    def haveConflict(self, event1: List[str], event2: List[str]) -> bool:
        a = datetime.strptime(event1[0], '%H:%M')
        b = datetime.strptime(event1[1], '%H:%M')
        c = datetime.strptime(event2[0], '%H:%M')
        d = datetime.strptime(event2[1], '%H:%M')
        if (a<=c<=b) or (a<=d<=b) or (c<=a<=d) or (c<=b<=d):
            return True
        else:
            return False
        
