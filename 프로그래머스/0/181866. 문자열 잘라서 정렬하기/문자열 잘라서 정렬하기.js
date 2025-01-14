function solution(myString) {
    var answer = myString.split('x').filter(s => s !== '').sort()
    return answer;
}