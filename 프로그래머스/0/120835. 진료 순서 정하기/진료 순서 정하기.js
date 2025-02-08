function solution(emergency) {
    const temp = [...emergency].sort((a,b)=>b-a)
    return emergency.map(v=>temp.indexOf(v)+1)
}