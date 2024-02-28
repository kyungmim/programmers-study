function solution(num, k) {
    var answer = 0
    let a = num.toString().indexOf(k) + 1
    answer = a  ?  a  : -1

    return answer;
}