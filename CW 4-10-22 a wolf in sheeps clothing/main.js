function warnTheSheep(queue) {
    if (queue.indexOf('wolf') < (queue.length - 1)) {
        return `Oi! Sheep number ${(queue.length - (queue.indexOf('wolf') + 1))}! You are about to be eaten by a wolf!`
    } else {
        return 'Pls go away and stop eating my sheep'
    }
}