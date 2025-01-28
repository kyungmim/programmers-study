function solution(myString, pat) {
    let answer = 0; 
    let index = 0;

  while ((index = myString.indexOf(pat, index)) !== -1) { 
    answer++; 
    index++; 
  }

    return answer;
}