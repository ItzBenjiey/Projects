let favoriteMovie = {
    name: "Pain and Gain:",
    runTime: "129 minutes",
    genre: 'Action,Crime,Comedy',
    characters: [{

                character: 1,
                    name: '"The Rock"', 
                    age: 32,
                    item: [{
                        itemOne:'Dumbell',
                        itemTwo: 'Bible',

                }],

            },
            {
                character: 2, 
                    name: '"Mark Wahlberg"',
                    age: 28, 
                    item: [{
                        itemOne: 'Lawnmower', 
                        itemTwo: '20 Bands',

                }],

            },
        ]
    }

//Movie Name and runTime
console.log(favoriteMovie.name, favoriteMovie.runTime);
//Console.log Rock Info
console.log(`name: ${favoriteMovie.characters[0].name}, age: ${favoriteMovie.characters[0].age}, items: ${favoriteMovie.characters[0]}`);
//Console.log Mark Wahlberg Name
console.log(favoriteMovie.characters[1].name);
//Console.log Mark Wahlberg Item
console.log(favoriteMovie.characters[1].item[0].itemTwo);