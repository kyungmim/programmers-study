function solution(s) {
    var answer = [];
    const words = s.split(' '); 
    
    words.map(word => {
        let transformedWord = '';
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                transformedWord += word[i].toUpperCase(); 
            } else {
                transformedWord += word[i].toLowerCase(); 
            }
        }
        answer.push(transformedWord); 
    });

    return answer.join(' '); 
}
