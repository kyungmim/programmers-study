function solution(my_string, indices) {
    const indicesSet = new Set(indices);
    var answer = my_string.split('').filter((_, i) => !indicesSet.has(i)).join('');
    return answer;
}