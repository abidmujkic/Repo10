function myFunction(myObj, checkProp) {
    var joj = {
        title: "Titanic",
        song: "My Heart Will Go On",
        genre: "drama"
    };
    joj.hasOwnProperty(checkProp);
    myObj = testno[checkProp];

    if (joj.hasOwnProperty(checkProp) === true) {
        return myObj;
    } else {
        return "Not Found";
    }

}
//myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title");
module.exports = myFunction;