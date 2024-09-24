function solution(n, control) {
    var answer = n;
    
    const str = control.split('')
    
    str.forEach((item) => {
        if (item === "w") {
            answer += 1;
        } else if (item === "s") {
            answer -= 1;
        } else if (item === "d") {
            answer += 10;
        } else if (item === "a") {
            answer -= 10;
        }
      });
    return answer;
}