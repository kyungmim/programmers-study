function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++){
        const s = array.slice(commands[i][0] - 1, commands[i][1]); 
        s.sort((a, b) => a - b);
        answer.push(s[commands[i][2] - 1]); 
    }
    return answer;
}
