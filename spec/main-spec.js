const taxiFee = require('../main/main');

describe('taxi fee', function () {

	it('within 2km and parking' , function() {
		let inputs = {distance:1,parkingTime:5};
		let summary = taxiFee(inputs);
		let expected = 7;
		expect(summary).toEqual(expected);
	});
	it('between 2km and 8km and parking' , function() {
		let inputs = {distance:7,parkingTime:10};
		let summary = taxiFee(inputs);
		let expected = 13;
		expect(summary).toEqual(expected);
	});
	it('more than 8km and parking' , function() {
		let inputs = {distance:10,parkingTime:20};
		let summary = taxiFee(inputs);
		let expected = 18;
		expect(summary).toEqual(expected);
	});
	it('more than 8km and no parking' , function() {
		let inputs = {distance:15,parkingTime:0};
		let summary = taxiFee(inputs);
		let expected = 19;
		expect(summary).toEqual(expected);
	});
    // write your tests here...
});
