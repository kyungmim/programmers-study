function solution(date1, date2) {
    var answer = new Date(date1.join()) < new Date(date2.join()) ? 1 : 0 ;
    return answer;
}