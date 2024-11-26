function solution(todo_list, finished) {
    var answer = todo_list.filter((item,i)=> !finished[i] && item );
    return answer;
}