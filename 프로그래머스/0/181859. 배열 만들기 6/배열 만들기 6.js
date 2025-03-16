function solution(arr) {
      let stk = [];
    
     for (let num of arr) {
        if (stk.length > 0 && stk[stk.length - 1] === num) {
            stk.pop();
        } else {
            stk.push(num);
        }
    }
    
     return stk.length > 0 ? stk : [-1];
}