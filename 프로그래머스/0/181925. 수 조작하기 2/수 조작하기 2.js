function solution(numLog) {
    var answer = '';
    
    for(let i = 0; i < numLog.length; i++){
    if(numLog[i] - numLog[i - 1] == 1) {
        answer += "w"
    } else if(numLog[i] - numLog[i - 1] == -1){
        answer += "s"
    } else if(numLog[i] - numLog[i - 1] == 10){
        answer += "d"
    } else if(numLog[i] - numLog[i - 1] == -10){
        answer += "a"
    }
}
    
    
    return answer;
}