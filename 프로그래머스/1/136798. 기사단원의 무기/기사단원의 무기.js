function solution(number, limit, power) {
 let answer = 0;

    for (let n = 1; n <= number; n++) {
        let count = 0; 
        
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                count++; 
                if (i !== n / i) {
                    count++; 
                }
            }
        }

        if (count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }

return answer
}