function solution(my_string) {
    return (my_string.match(/\d+/g) || []).map(str => Number(str)) .reduce((acc, cur) => acc + cur, 0);
}
