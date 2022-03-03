class Solution:
    def capitalizeTitle(self, title: str) -> str:
        title_s = title.split(" ")
        result = []
        for ti in title_s:
            ti = ti.lower()
            result.append(ti[0].upper()+ti[1:] if len(ti)>2 else ti)
        return " ".join(result)
            
            
            
        
