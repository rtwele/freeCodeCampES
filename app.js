let catName;
let quote;
function catTalk() {
  "use strict";
  
  catName = "Oliver";
  quote = catName + " says Meow!";
  return quote;
}
console.log(catTalk());

function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  console.log(checkScope());

  function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
      console.log(SENTENCE);
    }
  }
  console.log(printManyTimes("freeCodeCamp"));

const s = [5, 7, 2];
    function editInPlace() {
        "use strict";
        s[0] = 2;
        s[1] = 5;
        s[2] = 7;
    return s;
}
console.log(editInPlace());

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
  
    Object.freeze(MATH_CONSTANTS);
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch (ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  
  const PI = console.log(freezeObj());

  const magic = () => {
    "use strict";
    return new Date();
  };
  
  console.log(Date());

  const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2));
console.log(increment(8,3));
console.log(increment(5));

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3));
  console.log(sum(0, 1, 2));

  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2 
  
  arr2 = [...arr1];
  
  console.log(arr2);

const High_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today, tomorrow} = High_TEMPERATURES;
  console.log(today, tomorrow);

  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
    
  const { today: HighToday, tomorrow: HighTomorrow } = HIGH_TEMPERATURES;
  
  console.log(HighToday);
  console.log(HighTomorrow);

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
  console.log(LOCAL_FORECAST);

let a = 8, b = 6;
[a, b] = [b, a];
console.log([a, b]);
console.log([b, a]);

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = ({ max, min }) => (max + min) / 2.0;
  console.log(half(stats));

  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);

  const createPerson = (name, age, gender) => {
    "use strict";
    return {
      name,
      age,
      gender
    };
  };
  
  console.log(createPerson("Zodiac Hasbro", 56, "male"));

  const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);

  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  
  const carrot = new Vegetable("carrot");
  console.log(carrot.name);

  class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  
  const thermos = new Thermostat(76);
  let temp = thermos.temperature; 
  thermos.temperature = 26;
  temp = thermos.temperature;
  
  console.log(thermos);

  const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });

  const MakeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  MakeServerRequest.then(result => {
    console.log(result);
  });
  
  const makeserverRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  makeserverRequest.then(result => {
    console.log(result);
  });
  
  makeserverRequest.catch(error => {
    console.log(error);
  });