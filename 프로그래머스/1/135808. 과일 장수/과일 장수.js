function solution(k, m, score) {
    var answer = 0;

    const sortedScore = score.sort((a, b) => b - a);

    for (let i = 0; i < sortedScore.length; i += m) {
        if (i + m <= sortedScore.length) {
            const box = sortedScore.slice(i, i + m); 
            const minScore = box[box.length - 1]; 
            answer += minScore * m; 
        }
    }

    return answer;
}
