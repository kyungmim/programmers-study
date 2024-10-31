const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const answer =[]
    const strArr = str.split('');
    for(let i = 0;i < strArr.length; i++){
        if(strArr[i] === strArr[i].toLowerCase()){
            answer.push(strArr[i].toUpperCase())
    } else if(strArr[i] !== strArr[i].toLowerCase() ) {
    answer.push(strArr[i].toLowerCase())    
    }

    }
    console.log(answer.join(''))
});