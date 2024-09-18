function solution(my_string, index_list) {
    var answer = [];
    const str = my_string.split('')
    
    index_list.map((i)=>{
            answer.push(str[i])
    })
    
    return answer.join('');
}