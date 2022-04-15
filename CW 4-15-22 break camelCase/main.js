function solution(string) {
    string = string.split('');
    const addSpace = string.map(letter => {
        if (letter === letter.toUpperCase()) {
            return ' ' + letter;
        }else {
            return letter;
        }
    })
    return addSpace.join('');
}
