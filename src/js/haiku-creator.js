export default class Haiku {
  constructor(line1) {
    this.line1 = line1;
    // this.line2 = line2;
    // this.line3 = line3;
  }

    checkSyl(line) {
      let words = line.split(" ");
      const vowels = ["a", "e", "i", "o", "u", "y"];
      let vowelCount = 0;

      for (let i = 0; i < words.length; i++) {
        let chars = words[i].split("");
        for (let n = 0; n < chars.length; n++) {
          if (vowels.includes(chars[n])) {
            vowelCount++;
          }
          if ((vowels.includes(chars[n])) && (vowels.includes(chars[n + 1]))) {
            console.log("letter 1: " + chars[n]);
            console.log("letter 2: " + chars[n + 1]);
            vowelCount --;
          }
        }
        if ((chars[chars.length -1] === vowels[1]) && (chars[chars.length -2] != "l")) {
          vowelCount --;
        }
      }
      return vowelCount;
    }
}

// iterate over the chars, 
// if vowels.includes(chars[i]) && vowels.includes(chars[i + 1])
//    vowelCount --;


// syl la ble
// can dle
// a ble
// code

// Spaghetti/involve/aesthetics


// if a word ends in "e", subtract one syllable right off the bat:
//   - "[i]nv[o]lv{e}" 3 vowels, -1 for ending in "e" = 2 syll
// for each non-adjacent syllable "w[i]z[a]rd"
// for each adjacent syllable "[ae]sth[e]t[i]cs"