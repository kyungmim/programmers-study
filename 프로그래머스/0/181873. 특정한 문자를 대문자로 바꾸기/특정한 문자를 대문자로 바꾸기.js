function solution(my_string, alp) {
    var answer = my_string.split('').map(item => item === alp ? item.toUpperCase() : item).join('');
    return answer;
}