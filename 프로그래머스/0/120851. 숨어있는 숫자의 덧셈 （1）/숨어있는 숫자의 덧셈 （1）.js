function solution(my_string) {
    var answer = 0;
    let a = my_string.replace(/[^0-9]/g,'')
   answer = Array.from(a).reduce((acc,cur)=>{return acc + +cur},0)
    return answer;
}