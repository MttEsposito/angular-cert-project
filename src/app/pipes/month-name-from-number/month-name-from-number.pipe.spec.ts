import { MonthNamefromNumberPipe } from './month-name-from-number.pipe';

describe('MonthNamefromNumberPipe', () => {

  it('create an instance', () => {
    const pipe = new MonthNamefromNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('it should be 4 equal April', () => {
    const pipe = new MonthNamefromNumberPipe();
    const april =  pipe.transform(4);
    expect(april).toBe("April");
  });

  it('it should be blank if not value passed', () => {
    const pipe = new MonthNamefromNumberPipe();
    const april = pipe.transform();
    expect(april).toBe("");
  });

  it('it should be invalid date if value > 13', () => {
    const pipe = new MonthNamefromNumberPipe();
    const april = pipe.transform(16);
    expect(april).toBe("Invalid date");
  });
});
