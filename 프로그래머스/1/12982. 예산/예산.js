function solution(d, budget) {
    var answer = 0;
    const num = d.sort((a, b) => a - b)
    for(let i=0; i< num.length; i++){
        budget -= num[i]
        if(budget < 0) break;
        answer++
    }

    return answer;
}