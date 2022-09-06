// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

// **Solution**

function fireFight(s){
    // Split s into an array of individual words
    // Iterate through every element, and if it's 'Fire', replace it with '~~'
    // Join the transformed array
    
    s = s.split(' ');
    
    return s.map(word => word === 'Fire' ? '~~' : word).join(' ');
}