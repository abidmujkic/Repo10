var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
function myFunction(jedan, dva) {
    lion[jedan] = dva;
    return lion;
}
console.log(myFunction("roar","roar-roar"));
module.exports = myFunction