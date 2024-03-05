function solution(x) {
    var answer = true;
    let a = x.toString().split('').reduce((acc,cur)=> {return acc + Number(cur)},0)
    if(x % a === 0){
        return answer
    }else {
        return !answer
    }
    
   
    return answer;
}