// Trilingual democracy
// Switzerland has four official languages: German, French, Italian, and Romansh.1

// When native speakers of one or more of these languages meet, they follow certain regulations to choose a language for the group.2 Here are the rules for groups of exactly three3 people:4

// When all three are native speakers of the same language, it also becomes their group's language.5a

// When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.5b

// When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.5c

// The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.6

// Your task is to write a function that takes a list of three languages and returns the language the group should use.7 8

// Examples:9

// The language for a group of three native French speakers is French: FFF → F

// A group of two native Italian speakers and a Romansh speaker converses in Romansh: IIK → K

// When three people meet whose native languages are German, French, and Romansh, the group language is Italian: DFK → I

// **Solution**

// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
function trilingualDemocracy(group) {
    // Split `group` into individual characters
    // Check `group` to see if they all speak the same language. If so, return that language
    // Sort the group. If the first two languages are the same, but the third is different, return the third
    // If they are all different, return the language that is not in `group`
    
    if (group[0] === group[1] && group[0] === group[2]) {
      return group[0];
    }
    
    const groupArr = group.split('').sort();
    
    if (groupArr[0] === groupArr[1]) {
      return groupArr[2];
    } else if (groupArr[1] === groupArr[2]) {
      return groupArr[0];
    }
    
    const languages = 'DFIK';
    
    for (let i = 0; i < languages.length; i++) {
      if (!group.includes(languages[i])) {
        return languages[i];
      }
    }
    
}