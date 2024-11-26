function solution(num_list, n) {
      const arr = num_list.slice(n);
    const result = arr.concat(num_list.slice(0, n)); 
    
    
    return  result;
}