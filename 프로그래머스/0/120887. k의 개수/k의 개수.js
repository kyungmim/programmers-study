function solution(i, j, k) {
    let answer = 0;
    let str = k.toString(); 
    
    for (i; i <= j; i++) {
        answer += i.toString().split(str).length - 1;
    }
    
    return answer;
}
