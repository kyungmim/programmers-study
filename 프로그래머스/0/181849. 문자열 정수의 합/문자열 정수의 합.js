function solution(num_str) {
    var answer = 0;

    const num = num_str.split('').reduce((acc, cur) => {
        return acc + Number(cur);
    }, 0);

    return num;
}
