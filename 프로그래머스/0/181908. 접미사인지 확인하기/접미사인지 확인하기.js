function solution(my_string, is_suffix) {
    var answer = new Array(my_string);
    let result = 0;
    for(let i = 0 ; i < my_string.length; i++){
        if(answer[0].slice(i) === is_suffix) {
            result = 1
    }
        
}
    
    
    return result
}