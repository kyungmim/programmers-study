function solution(n, m, section) {
    let count = 0; 
    let i = 0; 

    while (i < section.length) {
      
        let currentSection = section[i];
        count++;  
        
        
        let end = currentSection + m - 1;

       
        while (i < section.length && section[i] <= end) {
            i++;
        }
    }

    return count;
}
