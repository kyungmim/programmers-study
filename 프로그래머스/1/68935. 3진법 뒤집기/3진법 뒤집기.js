function solution(n) {
    var answer = 0;
    
    const str = n.toString(3)
    const num = str.split('').reverse().join('');
    answer = parseInt(num, 3)

    return answer;
}