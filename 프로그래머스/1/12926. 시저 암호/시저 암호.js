function solution(s, n) {
    return s.split('').map(item => {
        if (item === ' ') return ' '; 
        let charCode = item.charCodeAt(0);

        if (item >= 'a' && item <= 'z') { 
            return String.fromCharCode((charCode - 97 + n) % 26 + 97);
        } else if (item >= 'A' && item <= 'Z') { 
            return String.fromCharCode((charCode - 65 + n) % 26 + 65);
        }
    }).join('');
}
