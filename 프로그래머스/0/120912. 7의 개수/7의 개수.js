function solution(array) {
    return array.flatMap(num => String(num).split('').map(Number)).filter(n=> n === 7).length;
}