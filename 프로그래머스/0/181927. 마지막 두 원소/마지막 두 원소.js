function solution(num_list) {
    var answer = [];
    const last = num_list.length - 1;  // 마지막 인덱스

    for(let i = 0; i < num_list.length; i++) {  // i < num_list.length으로 수정
        answer.push(num_list[i]);  // 현재 배열의 요소 추가
    }

    // 마지막 두 숫자를 비교하여 처리
    if(num_list[last - 1] < num_list[last]) {
        answer.push(num_list[last] - num_list[last - 1]);
    } else {
        answer.push(num_list[last] * 2);
    }

    return answer;
}
