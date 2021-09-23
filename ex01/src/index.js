// Only change code below this line
    var myPet = {
        species: "German Shepherd",
        name: "Rex",
        legs: 4 ,
        friends: ["Hamo", "Soso"]
    }

    function myFunction(myObj) {
        return myObj;
    }

// Only change code above this line

console.log(myFunction(myPet)); // Change this line
module.exports = { myPet, myFunction };