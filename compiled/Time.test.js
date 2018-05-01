const TimeEnum = require('./Time');

test('Time enum values correct?', function () {
    expect(TimeEnum.Time._0800_1000).toBe('08.00-10.00');
    expect(TimeEnum.Time._1000_1200).toBe('10.00-12.00');
    expect(TimeEnum.Time._1300_1500).toBe('13.00-15.00');
    expect(TimeEnum.Time._1500_1700).toBe('15.00-17.00');
});