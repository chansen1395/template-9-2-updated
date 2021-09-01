export default class Haiku {
  constructor(line1) {
    this.line1 = line1;
    // this.line2 = line2;
    // this.line3 = line3;
  }

    checkSyl(word) {
      let chars = word.split("");
      let vowelCount = 0;
      const vowels = ["a", "e", "i", "o", "u", "y"];
      for (let char of chars) {
        if (vowels.includes(char)) {
          vowelCount++;
        }
      }
      return vowelCount;
    }
//   checkType() {
//     if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//       return "not a triangle";
//     } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//       return "scalene triangle";
//     }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//       return "equilateral triangle";
//     } else {
//       return "isosceles triangle";
//     }
//   }    
}

// if a word ends in "e", subtract one syllable right off the bat:
//   - "[i]nv[o]lv{e}" 3 vowels, -1 for ending in "e" = 2 syll
// for each non-adjacent syllable "w[i]z[a]rd"
// for each adjacent syllable "[ae]sth[e]t[i]cs"