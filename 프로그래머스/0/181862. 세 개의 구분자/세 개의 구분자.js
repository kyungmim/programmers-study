function solution(myStr) {
    var answer = myStr.split(/[abc]/).filter(Boolean);
    return answer.length ? answer : ["EMPTY"];
}