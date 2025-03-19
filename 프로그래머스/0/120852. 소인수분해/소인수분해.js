function solution(n) {
    let answer = [];
    let start = 2;

    while (n >= 2) {
        if (n % start === 0) { 
            answer.push(start); 
            n /= start; 
        } else {
            start++; 
        }
    }
    return [...new Set(answer)]; ;
}