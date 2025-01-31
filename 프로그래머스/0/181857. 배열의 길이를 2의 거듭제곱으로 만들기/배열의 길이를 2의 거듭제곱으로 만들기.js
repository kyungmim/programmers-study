function solution(arr) {
    const answer = (arr.length & (arr.length - 1)) === 0;
    const pow = Math.pow(2, Math.ceil(Math.log2(arr.length)));
    return answer ? arr : [...arr, ...new Array(pow - arr.length).fill(0)];
}