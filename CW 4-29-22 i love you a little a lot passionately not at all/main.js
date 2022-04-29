function howMuchILoveYou(nbPetals) {
    const petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    
    if (nbPetals % 6 === 0) {
      return petals[5];
    } else if (nbPetals > 6) {
      return petals[(nbPetals % 6) - 1];
    } else {
      return petals[nbPetals - 1];
    }
}