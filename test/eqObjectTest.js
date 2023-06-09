const assert = require('chai').assert;
const {eqObjects} = require('../index');


describe('#eqObjects', () => {

  it("should return false for object olagunju and caroline", () => {

    const olagunju = {firstName: "Caroline", lastName: "Olagunju", age: 31, job: "Web developer"};

    const caroline = {firstName: "Caroline", lastName: "Olagunju", age: 31, job: "Web developer", school: "LHL"};

    assert.isFalse(eqObjects(olagunju, caroline), false);
  });

  it("should return true for object car and carolineCar", () => {

    const car = {brand: "Ford", model: "Escape", year: 2023, wheel: "All wheel drive"};

    const carolineCar = {brand: "Ford", model: "Escape", year: 2023, wheel: "All wheel drive"};
  
    assert.isTrue(eqObjects(car, carolineCar), true);
  });

});