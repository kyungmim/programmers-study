function solution(myString, pat) {
    const str = myString.split('')
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'A'){
            str[i] = 'B'
    } else if(str[i] === 'B'){
            str[i] = 'A'
    }
}
    return str.join('').includes(pat) ? 1:0 
}