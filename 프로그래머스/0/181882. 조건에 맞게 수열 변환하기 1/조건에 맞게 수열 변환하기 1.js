function solution(arr) {
    var answer = [];
        
    arr.map((num)=>{
        if(num % 2 === 0 && num >= 50){
            answer.push(num / 2)
        } else if(num % 2 !== 0 && num < 50){
            answer.push(num * 2)
        }else{
            answer.push(num)
        }
    })
    
    return answer;
}