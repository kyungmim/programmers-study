function solution(n)
{
    var answer = 0;
    n.toString().split('').map((item) => {return answer += Number(item)})

    return answer;
}