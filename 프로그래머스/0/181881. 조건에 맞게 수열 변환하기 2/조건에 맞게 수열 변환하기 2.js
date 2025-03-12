function solution(arr) {
     let x = 0; 
  
  while (true) {
    let newArr = arr.map(num => 
      num >= 50 && num % 2 === 0 ? num / 2 : 
      num < 50 && num % 2 === 1 ? num * 2 + 1 : 
      num
    );

    if (JSON.stringify(arr) === JSON.stringify(newArr)) {
      return x; 
    }

    arr = newArr;
    x++; 
  }
}