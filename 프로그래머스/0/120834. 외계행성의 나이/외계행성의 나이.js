function solution(age) {
    let a = ['a','b','c','d','e','f','g','h','i','j'];
    let  answer =Array.from(age.toString() , (i)=> a[i[0]]).join('')
    return answer;
}