function solution(a, d, included) {
    var answer = 0;
    const num = [];
    for(let i = 0 ; i < included.length; i++){
        if(num.length == 0 ) num.push(a)
        num.push(num[i] + d)
    }
    
   for(let i = 0 ; i < included.length; i++){
        if(included[i]) answer += num[i]
    }
    
    
    return answer;
}