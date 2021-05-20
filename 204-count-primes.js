/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	let primes = [];
	let i,j;
	const num = n-1;
    var count=0
	
	for(i=2; i<=num; i++)
		primes[i] = true;
	
	for(i=2; i<=Math.sqrt(num); i++){
		if(primes[i] === true){
			for(j = i*2; j<=num; j+=i)
				primes[j] = false;
		}
	}
	
	for(i=2; i<=num; i++){
		if(primes[i] === true){
			count+=1
		}
	}
    return count
    
};


