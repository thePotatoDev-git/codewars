function pipeFix(numbers){
    const fixedPipe = [];
    for (i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        fixedPipe.push(i);
    }
    return fixedPipe;
}