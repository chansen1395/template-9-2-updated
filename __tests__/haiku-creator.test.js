import Haiku from './../src/js/haiku-creator.js';

describe('Haiku', () => {

  test('Should create a new poem to test', () => {
    const newHaiku = new Haiku("this is the first line");
    expect(newHaiku.line1).toEqual("this is the first line");
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

  // test('should correctly determine whether three lengths make an isosceles triangle', () => {
  //   const isocTriangle = new Triangle(5,5,7)
  //   expect(isocTriangle.checkType()).toEqual("isosceles triangle");
  // });

  // test('should correctly determine whether three lengths make an scalene triangle', () => {
  //   const scalTriangle = new Triangle(2,3,4)
  //   expect(scalTriangle.checkType()).toEqual("scalene triangle");
  // });

  // test('should correctly determine whether three lengths make an equilateral triangle', () => {
  //   const equiTriangle = new Triangle(5,5,5)
  //   expect(equiTriangle.checkType()).toEqual("equilateral triangle");
  // });

});