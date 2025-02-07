function solution(s) {
    var answer = [...s].reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(answer).filter(str => answer[str] === 1).sort().join('');
}
