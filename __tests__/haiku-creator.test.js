import Haiku from './../src/js/haiku-creator.js';

describe('Haiku', () => {

  test('Should create a new poem to test', () => {
    const newHaiku = new Haiku("this is the first line", "second line", "third line");
    expect(newHaiku.line1).toEqual("this is the first line");
    expect(newHaiku.line2).toEqual("second line");
    expect(newHaiku.line3).toEqual("third line");
  });

  test('A word has more than one syllable', () => {
    const newHaiku = new Haiku("spaghetti");
    expect(newHaiku.checkSyl(newHaiku.line1)).toEqual(3);
  });

  test('Whitespaces test', () => {
    const newHaiku = new Haiku("    dfgfakg  jh   ");
    expect(newHaiku.checkSyl(newHaiku.line1)).toEqual(1);
  });

  test('A line has more than one word, counts syllables', () => {
    const newHaiku = new Haiku("spaghetti helle caste");
    expect(newHaiku.checkSyl(newHaiku.line1)).toEqual(6);
  });

  test('A word has adjacent vowels, but only counts as one syllable', () => {
    const newHaiku = new Haiku("deepii spaghetti helle caste");
    expect(newHaiku.checkSyl(newHaiku.line1)).toEqual(8);
  });

  test('If three lines compose a Haiku', () => {
    const newHaiku = new Haiku("spaghetti helle", "spaghetti helle bobby", "dog dog dog dog dog");
    expect(newHaiku.checkLines()).toEqual(true);
  });

  test('If three lines do not compose a Haiku', () => {
    const newHaiku = new Haiku("spaghetti helle bobby", "test fail", "dog dog dog dog dog");
    expect(newHaiku.checkLines()).toEqual(false);
  });

  test('One or more empty lines do not compose a haiku', () => {
    const newHaiku = new Haiku("spaghetti helle bobby", "", "");
    expect(newHaiku.checkLines()).toEqual(false);
  });

  test('Punctuation breaks checkSyl. Regex will pass the test if implemented', () => {
    const newHaiku = new Haiku("spaghetti, caste? hi", "spaghetti helle bobby", "spaghetti, caste? hi.");
    expect(newHaiku.checkLines()).toEqual(false);
  });

  // test('One or more empty lines do not compose a haiku', () => {
  //   const newHaiku = new Haiku("", "", "");
  //   expect(newHaiku.checkLines()).toEqual(false);
  // });

  // Not Used, could implement other methods from 
  // test('Count the number of syllables from each line', () => {
  //   const newHaiku = new Haiku("spaghetti helle");
  //   let sylOne = (newHaiku.checkSyl(newHaiku.line1));
  //   expect(newHaiku.fiveSyl(sylOne)).toEqual(true);
  // });

});