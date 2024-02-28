function solution(n) {
    var answer = [];
    for(let a = 1; a <= n; a++){
        if(n % a === 0){
            answer.push(a)
        }
    }
    return answer;
}