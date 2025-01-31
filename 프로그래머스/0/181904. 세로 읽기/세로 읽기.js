function solution(my_string, m, c) {
    const reg = new RegExp(`.{1,${m}}`, 'g');
    const answer = my_string.match(reg);
    let result = '';
      for (let i = 0; i < answer.length; i++) {
        if (answer[i][c - 1]) {
            result += answer[i][c - 1];
        }
    }

          
    return result;
}