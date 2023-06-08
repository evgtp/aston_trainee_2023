Массивы в JavaScript являются “неправильными” т.к. длинна массива должна быть неизменна. Массивы посравнению с классическими массивами имеют динамическую длинну и могут включать в себя разные типы данных.
Массивы в JavaScript совмещают в себе сразу несколько структур данных т.к. были унаслдеованны от объекта и имеют отрибуты стэка и очереди.

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = {
  item: "some value",
};

logger.bind(obj)()

logger.apply(obj)

logger.call(obj)

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = {
  item: "some value",
};

function myBind(fanc, context, ...arr) {
  return function (...args) {
    const uniqId = Date.now().toString();
    context[uniqId] = fanc;
    const result = context[uniqId](...arr.concat(args));
    delete context[uniqId];
    return result;
  };
}

myBind(logger, obj)();
