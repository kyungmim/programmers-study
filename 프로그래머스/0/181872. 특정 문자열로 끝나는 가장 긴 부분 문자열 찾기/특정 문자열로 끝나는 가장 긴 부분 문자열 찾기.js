function solution(myString, pat) {
    var answer = myString.lastIndexOf(pat);
    return myString.substr(0, answer + pat.length);;
}