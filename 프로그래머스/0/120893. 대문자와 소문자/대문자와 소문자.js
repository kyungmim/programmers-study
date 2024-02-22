function solution(my_string) {
    var answer = '';
    Array.from(my_string).forEach((item)=>{
        if(item === item.toUpperCase()){
            answer += item.toLowerCase();
        } else{
            answer += item.toUpperCase();
        }
    })
    return answer;
}