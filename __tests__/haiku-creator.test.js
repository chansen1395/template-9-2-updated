import Haiku from './../src/js/haiku-creator.js';

describe('Haiku', () => {

  test('Should create a new poem to test', () => {
    const newHaiku = new Haiku("this is the first line");
    expect(newHaiku.line1).toEqual("this is the first line");
  });

  // test('Line 1 has more than one syllable', () => {
  //   const newLine1 = new Haiku(line1);
  //   expect(newLine1.checkType()).toEqual("not a triangle");
  // });

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