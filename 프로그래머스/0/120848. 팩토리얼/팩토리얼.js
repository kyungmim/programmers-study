function solution(n) {
    let answer = 1;
    let i = 0;

    while(answer <= n){
    i++;
        answer *= i;
}
    
    return i - 1;
}