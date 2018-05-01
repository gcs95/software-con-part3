const DayEnum = require('./Day');

test('Day enum values correct?', function(){
    expect(DayEnum.Day.MON).toBe('Mon');
    expect(DayEnum.Day.TUE).toBe('Tue');
    expect(DayEnum.Day.WED).toBe('Wed');
    expect(DayEnum.Day.THU).toBe('Thu');
    expect(DayEnum.Day.FRI).toBe('Fri');
});