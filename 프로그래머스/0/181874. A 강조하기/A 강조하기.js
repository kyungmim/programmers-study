function solution(myString) {
    var answer = myString.split('')
        .map(item => item.toLowerCase() === "a" ? "A" : item.toLowerCase())
        .join('');
    return answer;
}
