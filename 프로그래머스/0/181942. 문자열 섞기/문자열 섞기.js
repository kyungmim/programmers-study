function solution(str1, str2) {
    var answer = [];
    const str1A = str1.split('');
    const str2B = str2.split('');
    
    for(let i =0; i<str1.length;i++){
        answer.push(str1A[i]);
        answer.push(str2B[i])
       
}
    
    return answer.join('');
}