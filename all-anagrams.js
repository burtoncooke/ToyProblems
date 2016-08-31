function allAnagrams(string) {
  
  var anagrams = []; 

  function makeAnagram(anagram, unUsedLetters) {

    if(anagram.length === string.length) {
      if(!anagrams.includes(anagram)) {
        anagrams.push(anagram);
      } 
      return;
    }

    for(var i = 0; i < unUsedLetters.length; i++) {
      var unUsed = unUsedLetters.slice();
      unUsed.splice(i, 1);
      makeAnagram(anagram + unUsedLetters[i], unUsed)
    }
  }

  makeAnagram('', string.split(''))
  return anagrams;
}