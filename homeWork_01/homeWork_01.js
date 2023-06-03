/////////////////////////////////////////////
/////////create object counter///////////////
/////////////////////////////////////////////

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
  this.reset = function () {
    return (count = 0);
  };
}

let counter = new Counter();

const counter = Object.create(
  {},
  {
    count: {
      value: 0,
      enumerable: true,
      writable: true,
    },
    up: {
      get() {
        return ++this.count;
      },
    },
    down: {
      get() {
        return --this.count;
      },
    },
    reset: {
      get() {
        return (this.count = 0);
      },
    },
  }
);

const counter = {};
counter.count = 0;
counter.up = function () {
  return ++this.count;
};
counter.down = function () {
  return --this.count;
};
counter.reset = function () {
  return (this.count = 0);
};

const counter = {
  count: 0,
  up: function () {
    return ++this.count;
  },
  down: function () {
    return --this.count;
  },
  reset: function () {
    return (this.count = 0);
  },
};

class Counter {
  constructor(options) {
    this.count = options.count;
    this.up = options.up;
    this.down = options.down;
    this.reset = options.reset;
  }
}

const counter = new Counter({
  count: 0,
  up: function () {
    return ++this.count;
  },
  down: function () {
    return --this.count;
  },
  reset: function () {
    return (this.count = 0);
  },
});

//////////////////////////////////////////
/////////copy counter object//////////////
//////////////////////////////////////////

const conterCopy = counter;

const counterCopy = {};
for (let key in counter) {
  counterCopy[key] = counter[key];
}

const counterCopy = { ...counter };

const couterCopy = Object.create(counter);

const couterCopy = Object.assign({}, counter);

//////////////////////////////////////////////////
////////////create makeCounter////////////////////
//////////////////////////////////////////////////

function counterFunc() {
  let makeCounter = () => {
    let count = 0;
    return {
      up: () => {
        return ++count;
      },
      down: () => {
        return --count;
      },
      reset: () => {
        return (count = 0);
      },
      value: () => {
        return count;
      },
    };
  };
  let counter = makeCounter();
  counter.up();
  counter.up();
  counter.down();
  counter.reset();
  return counter.value();
}
counterFunc();

let up, down, reset;

(function () {
  let count = 0;
  up = function () {
    return ++count;
  };
  down = function () {
    return --count;
  };
  reset = function () {
    return (count = 0);
  };
})();

up();
up();
down();
reset();

///////////////////////////////////////////////////////
///////////deepEqual///////////////////////////////////
///////////////////////////////////////////////////////

const deepEqual = (obj1, obj2) => {
  const areObject = typeof obj1 === "object" && typeof obj2 === "object";
  const areNotNull = obj1 !== null && obj2 !== null;

  if (areObject && areNotNull) {
    for (let key in obj1) {
      if (!obj2.hasOwnProperty(key)) return false;
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        const result = deepEqual(obj1[key], obj2[key]);
        if (!result) return false;
      } else {
        if (obj1[key] !== obj2[key]) return false;
      }
    }
    return true;
  } else {
    return obj1 === obj2;
  }
};

const obj1 = {
  here: {
    is: "on",
    other: "3",
  },
  object: "Y",
};

const obj2 = {
  here: {
    is: "on",
    other: "2",
  },
  object: "Y",
};

console.log(deepEqual(obj1, obj2));

///////////////////////////////////////////////////////////////////
/////////////reverseStr////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

function reverseStr(str) {
  return str.split("").reverse().join("");
}
