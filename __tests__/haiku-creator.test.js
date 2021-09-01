import Haiku from './../src/js/haiku-creator.js';

describe('Haiku', () => {

  test('Should create a new poem to test', () => {
    const newHaiku = new Haiku("this is the first line");
    expect(newHaiku.line1).toEqual("this is the first line");
    // expect(newHaiku.line2).toEqual("second line");
  });

  test('A word has more than one syllable', () => {
    const newHaiku = new Haiku("spaghetti");
    expect(newHaiku.checkSyl(newHaiku.line1)).toEqual(3);
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

  // test('Count the number of syllables from each line', () => {
  //   const newHaiku = new Haiku("spaghetti helle");
  //   let sylOne = (newHaiku.checkSyl(newHaiku.line1));
  //   expect(newHaiku.fiveSyl(sylOne)).toEqual(true);
  // });

});