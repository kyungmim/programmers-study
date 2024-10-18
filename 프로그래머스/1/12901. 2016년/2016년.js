function solution(a, b) {
    const day = `2016-${a}-${b}`
    var answer = new Date(day);
    const weeks = ['SUN','MON','TUE','WED','THU','FRI','SAT']    
      let res = '';
    for(let i = 0; i < weeks.length; i++){
        if(i === answer.getDay()) {
        return res = weeks[i]
        }
    }
  
    
    return res;
}