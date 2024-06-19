process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]); 
    
    for(let i = 0; i < b; i++) { // b = 3 3번 반복 
        let str = "";  // * 저장할 변수 지정 
        for(let j = 0; j < a; j++) { // a = 5, 5번 반복 
            str = str + "*";  // 5번 출력 
        }
        console.log(str); // 출력 
      }
    
});