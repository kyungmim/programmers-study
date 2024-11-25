function solution(rny_string) {
    var answer = rny_string.split('');
    
    for(let i =0; i < answer.length; i++){
        if(answer[i] === "m"){
            delete answer[i]
            answer[i] = "rn"
    }
}
    
    return answer.join('');
}