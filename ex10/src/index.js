function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true,
        },
        002: {
            artist: "Hule",
            title: "Nocna dama",
            release_year: 2002,
            id: 0022,
            formats: {
                1: "kaseta",
                2: "CD",
                3: "radio"
            }
        }

    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;