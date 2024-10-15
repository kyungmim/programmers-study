function solution(name, yearning, photo) {
    
    const yearningMap = {};
    for (let i = 0; i < name.length; i++) {
        yearningMap[name[i]] = yearning[i];
    }

   
    const result = [];
    for (let i = 0; i < photo.length; i++) {
        let score = 0;
        for (let j = 0; j < photo[i].length; j++) {
            const person = photo[i][j];
            score += yearningMap[person] || 0; 
        }
        result.push(score);
    }

    return result;
}
