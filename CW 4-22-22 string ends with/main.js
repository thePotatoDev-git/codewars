function solution(str, ending){
    const endsWith = str.substring(str.length - ending.length);
    return endsWith == ending ? true : false;
  }