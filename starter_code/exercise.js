var quiz = {};

// ---------------------------------------------------------------------
// 1.001 QUIZ 2018
//
// All quiz questions are in this file. If you would like to run
// your code there is a separate file, run.js(), which you can use
// and manipulate to your liking. The quiz is open book and open web.
// Feel free to google for answers as you would in the real world.
// Good luck!
// ---------------------------------------------------------------------

// ----------------------------------------
//   SECTION 01 - BASICS
// ----------------------------------------

quiz.question_00 = function() {
  // ----------------------------------------
  //   QUESTION 00
  //   Is "counter" a global variable?
  //   Return true or false.
  return false;
  // ----------------------------------------
  var counter = 0;
  // return 'Error: Question 01 not implemented';
};

quiz.question_01 = function() {
  // ----------------------------------------
  //   QUESTION 01
  //   Return a string that says "Hello World!"
  var str = 'Hello World!';
  return str;
  // ----------------------------------------
  // return 'Error: Question 01 not implemented';
};

quiz.question_02 = function() {
  // ----------------------------------------
  //   QUESTION 02
  //   Return an array of objects
  var arr = [
    {'index': 0},
    {'index': 1},
    {'index': 2}
  ];
  return arr;
  // ----------------------------------------
  // return 'Error: Question 02 not implemented';
};

quiz.question_03 = function() {
  // ----------------------------------------
  //   QUESTION 03
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'shape' and 'color' property
  var arr = [
    {'shape': 'circle', 'color': 'red'},
    {'shape': 'circle', 'color': 'green'},
    {'shape': 'square', 'color': 'blue'}
  ];
  return arr;
  // ----------------------------------------
  // return 'Error: Question 03 not implemented';
};

quiz.question_04 = function(item1, item2) {
  // ----------------------------------------
  //   QUESTION 04
  //   Return an object,
  //   each object property value must be a function
  function func(item){
    if(item){
      return 1;
    }
    else{
      return 0;
    }
  };
  var obj = {
    'item1': func(item1),
    'item2': func(item2)
  };
  return obj;
  // ----------------------------------------
  // return 'Error: Question 04 not implemented';
};

quiz.question_05 = function(someObject) {
  // ----------------------------------------
  //   QUESTION 05
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  someObject.age = 24;
  return someObject;
  // ----------------------------------------
  // return 'Error: Question 05 not implemented';
};

// ----------------------------------------
//   SECTION 02 - OBJECTS
// ----------------------------------------

quiz.question_06 = function(data, carName, model, doors, color) {
  // ---------------------------------------------------------------
  // Find the price of the car whose name, model, and doors are provided
  // as arguments to this function.
  // Return the price.
  var carPrice = 0;
  if(carName == 'Nissan'){
    data.cars.Nissan.forEach(function(item){
      if((item.model == model) && (item.doors == doors)){
        carPrice = item.price;
      }
    });
  }
  if(carName == 'Ford'){
    data.cars.Ford.forEach(function(item){
      if((item.model == model) && (item.doors == doors)){
        carPrice = item.price;
      }
    });
  }
  if(carName == 'BMW'){
    data.cars.BMW.forEach(function(item){
      item.color.forEach(function(subItem){
        if(subItem.id == color){
          carPrice = subItem.price;
        }
      })
    });
  }
  return carPrice;
  // ---------------------------------------------------------------
  // return 'Error: Question 06 not implemented';
};

quiz.question_07 = function(data) {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  var maxNissan = {
    'make': 'Nissan',
    'model': '',
    'doors': 0,
    'price': 0
  };
  var maxFord = {
    'make': 'Ford',
    'model': '',
    'doors': 0,
    'price': 0
  };
  var maxBMW = {
    'make': 'BMW',
    'model': '',
    'doors': 0,
    'price': 0
  };
  data.cars.Nissan.forEach(function(item){
    if(item.price > maxNissan.price){
      maxNissan.model = item.model;
      maxNissan.doors = item.doors;
      maxNissan.price = item.price;
    }
  });
  data.cars.Ford.forEach(function(item){
    if(item.price > maxFord.price){
      maxFord.model = item.model;
      maxFord.doors = item.doors;
      maxFord.price = item.price;
    }
  });
  data.cars.BMW.forEach(function(item){
    item.color.forEach(function(subItem){
      if(subItem.price > maxBMW.price){
        maxBMW.model = item.model;
        maxBMW.doors = item.doors;
        maxBMW.price = subItem.price;
      }
    })
  });
  var maxPricedCar = [];
  maxPricedCar.push(maxNissan);
  maxPricedCar.push(maxFord);
  maxPricedCar.push(maxBMW);
  return maxPricedCar;
  // ---------------------------------------------------------------
};

quiz.question_08 = function(data) {
  // ---------------------------------------------------------------
  // Add a new car object to the given cardata object, "Honda", to the data set with
  // model: "Civic", doors: 4, price: 18840
  // Return the updated data
  var car = {
    'model': 'Civic',
    'doors': 4,
    'price': 18840
  };
  data.cars.Honda = [];
  data.cars.Honda.push(car);
  return data;
  // ---------------------------------------------------------------
};

// ----------------------------------------
//   SECTION 03 - ARRAY FUNCTIONS
// ----------------------------------------

quiz.question_09 = function(input) {
  // ---------------------------------------------------------------
  // We are provided ski racer results from the olympics.
  // The input is an array of skier objects with name and time properties.
  // Using forEach, return an object whose keys are skier names and values
  // are associated skier times. You can assume each skier as a unique name.
  // Example input: [{ name: 'Bob', time: 45.00 }]
  // Example output: { 'Bob': 45.00 }
  var obj = {};
  input.forEach(function(item){
    obj[item.name] = item.time;
  });
  return obj;
};

quiz.question_10 = function(input) {
  // ---------------------------------------------------------------
  // The input is an array of skier objects with name and time properties.
  // However, we are only interested in names of skiers with a time less than 48.5.
  // Using filter, map, and the provided input, return an array of skier names whose
  // times are under 48.5.
  // Example input: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // Example output: ['Bob']
  var res = input
    .filter(function(item){
      return item.time < 48.5;
    })
    .map(function(item){
      return item.name;
    });
  return res;
  // ---------------------------------------------------------------
};

quiz.question_11 = function(input) {
  // ---------------------------------------------------------------
  // The input is now the array of skier names whose times are less than 48.5.
  // We want to convert the array of names into a string of names
  // separated by a comma
  // and a space, preserving order. Complete the reduce function.
  // Example input: ['Bob', 'Sue']
  // Eample output: 'Bob, Sue'
  var res = input
    .reduce(function(prev, curr){
      return prev + ', ' + curr;
    });
  return res;
  // ---------------------------------------------------------------
};

quiz.question_12 = function(input) {
  // ---------------------------------------------------------------
  // Write a sort callback function to sort the skier objects
  // based on their race time in descending order.
  // Return an array of skier objects.
  // Example input: [{ name: 'Sue', time: 50.0 }, { name: 'Bob', time: 45.0 }]
  // Example output: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  function comp(prev, curr){
    return curr.time - prev.time;
  };
  var sorted = input.sort(comp);
  return sorted;
  // ---------------------------------------------------------------
};

module.exports = quiz; // export functions