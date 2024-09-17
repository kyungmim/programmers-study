function solution(my_string, n) {
    var answer = []
    const str = my_string.split('');
        for(let i=0; i < n ; i++){
            answer.push(str[i])    
        }
    return answer.join('');
}