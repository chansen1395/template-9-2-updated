export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    // the reason .trim().replace(/[.,!?]/g, "") cause failures could
    // be because some tests do not use 3 parameters
  }
  
  checkSyl(line) {
    let words = line.split(" ");
    console.log("Array of words: " + words);
    const vowels = ["a", "e", "i", "o", "u", "y"];
    let vowelCount = 0;

    for (let i = 0; i < words.length; i++) {
      let chars = words[i].split("");
      for (let n = 0; n < chars.length; n++) {
        if (vowels.includes(chars[n])) {
          vowelCount++;
        }
        if ((vowels.includes(chars[n])) && (vowels.includes(chars[n + 1]))) {
          vowelCount--;
        }
      }
      if ((chars[chars.length - 1] === vowels[1]) && (chars[chars.length - 2] != "l")) {
        vowelCount--;
      }
    }
    return vowelCount;
  }

  checkLines() {
    let isHaiku = false;
    let firstLine = this.checkSyl(this.line1);
    let secondLine = this.checkSyl(this.line2);
    let thirdLine = this.checkSyl(this.line3);
    if ((firstLine === 5) && (secondLine === 7) && (thirdLine === 5)) { 
      isHaiku = true;
    } 
    return isHaiku;
  }

  // generator(sylLeft)
  // **sylLeft = 5 or 7;**
  // newLine = [];
  // while (sylLeft > 0) {
  // let words = ["word", "word", "word", "word"];
  //  i = randomNumFxn max of words.length;
  //  if (words[i].checkSyl("word") =< sylLeft ) {
  //    sylLeft -= words[i].checkSyl("word")
  //    newLine.push(words[i]);
  //  }
  //  }
  // return newLine;


  // fiveSyl(sylCount) {
  //   let isFive = false;
  //   if (sylCount === 5) {
  //     isFive = true;
  //   }
  //   return isFive;
  // }

  // sevenSyl(sylCount) {
  //   let isFive = false;
  //   if (sylCount === 7) {
  //     isFive = true;
  //   }
  //   return isFive;
  // }
}


// if a word ends in "e", subtract one syllable right off the bat:
//   - "[i]nv[o]lv{e}" 3 vowels, -1 for ending in "e" = 2 syll
// for each non-adjacent syllable "w[i]z[a]rd"
// for each adjacent syllable "[ae]sth[e]t[i]cs"

// Repo Link:
// https://github.com/chansen1395/haiku-creator9-1
