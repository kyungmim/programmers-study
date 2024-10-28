function solution(n, m, section) {
    let count = 0; 
    let i = 0; 

    while (i < section.length) {
      
        let currentSection = section[i];
        count++;  
        
        
        let end = currentSection + m - 1;

        // 다음 페인트칠할 구역이 롤러 범위에 포함되면 건너뜀
        while (i < section.length && section[i] <= end) {
            i++;
        }
    }

    return count;
}
