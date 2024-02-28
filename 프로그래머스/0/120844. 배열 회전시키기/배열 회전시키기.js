function solution(numbers, direction) {
    var answer = numbers;
    if(direction === 'right'){
        let a = numbers.pop()
        answer.unshift(a)
    } else if (direction === 'left') {
        let b = numbers.shift()
        answer.push(b)
    }
    return answer;
}