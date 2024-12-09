function solution(num) {
    var answer = [];
    
 while (num !== 1) {
        answer.push(num); 
        if (num % 2 === 0) {
            num = num / 2; 
        } else {
            num = 3 * num + 1; 
        }
    }
    return answer.length > 500 ? -1 : answer.length;
}