class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        key =  "".join(key.split(" "))
        alpha = "abcdefghijklmnopqrstuvwxyz"
        count = [0]*26
        index = 0
        result = {}
        for i in key:
            if index>26:
                break
            if count[alpha.index(i)]==0:
                count[alpha.index(i)]+=1
                result[i] = alpha[index]
                index+=1
        
        result2 = ""
        for j in message:
            if j==" ":
                result2+=" "
            else:
                result2+=result[j]
        return result2
        
