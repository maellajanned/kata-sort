describe("Sort People", function() {
  var sortPeople = require('../src/SortPeople.js');
  it("rejects non array inputs", function() {
    expect(sortPeople(1)).toBeNull();
    expect(sortPeople("abc")).toBeNull();
  });
  it("rejects empty arrays", function() {
    expect(sortPeople([])).toBeNull();
  });
  it("sorts people by age", function() {
    expect(sortPeople([{
      age: 83,
      name: 'joel'
    }, {
      age: 46,
      name: 'roger'
    }, {
      age: 99,
      name: 'vinny'
    }, {
      age: 26,
      name: 'don'
    }, {
      age: 74,
      name: 'brendan'
    }])).toEqual([{
      age: 26,
      name: "don"
    }, {
      age: 46,
      name: "roger"
    }, {
      age: 74,
      name: "brendan"
    }, {
      age: 83,
      name: "joel"
    }, {
      age: 99,
      name: "vinny"
    }]);
  });
});
