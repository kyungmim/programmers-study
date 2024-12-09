function solution(myString) {
    var answer = myString.split('').map(item => item < 'l' ? 'l' : item);
    return answer.join('');
}