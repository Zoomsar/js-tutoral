function sayHello() {
    console.log("Yellow!");
}

console.time("test");

const time = setTimeout(sayHello, 3000);
// clearTimeout(time);

console.timeEnd("test");