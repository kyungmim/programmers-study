function solution(number) {
    var answer = number.split('').reduce((acc,cur)=>{
        
       return Number(acc) + Number(cur)
        
    },0);
    return answer % 9;
}