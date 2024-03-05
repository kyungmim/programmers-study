function solution(arr) {
    let sum = arr.reduce((acc,cur)=>{
     return acc + cur  
    },0)
    
    var answer = sum / arr.length
    return answer;
}