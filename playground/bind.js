const obj = {
  age: 21,
  name: "akash",
};

function func(v1, v2) {
  console.log(`Age is ${v1 + v2}`);
}

const newFunc = func.bind(null, 5, 3);
newFunc();
