function solution(n) {
    var answer = Number(n.toString().split('').sort((a,b)=>{
        return b - a
    }).join(''))
    return answer;
}