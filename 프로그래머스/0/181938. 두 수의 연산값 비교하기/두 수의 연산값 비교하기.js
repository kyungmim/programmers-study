function solution(a, b) {
    const str = Number(String(a) + String(b))
    const num = 2 * a * b
    var answer = Math.max(str,num);
    return answer
}