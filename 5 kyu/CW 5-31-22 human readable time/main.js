// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// **Solution**

function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let sec = seconds % 60;
    
    if (hours < 10 ? hours = '0' + String(hours) : String(hours));
    if (minutes < 10 ? minutes = '0' + String(minutes) : minutes = String(minutes));
    if (sec < 10 ? sec = '0' +  String(sec) : String(sec));
    
    return `${hours}:${minutes}:${sec}`;
  }