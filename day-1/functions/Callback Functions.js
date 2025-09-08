function processUserInput(name, callback) {
  console.log("Hello, " + name);
  callback();
}

processUserInput("Siva", function () {
  console.log("This is a callback!");
});
