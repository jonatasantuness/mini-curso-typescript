var residentEvil8 = {
    title: 'Resident Evil 8',
    genre: 'terror',
    platform: ['PS5', 'Xbox', 'PC'],
    price: 350,
    getSimilars: function (title) {
        console.log("Games similares a " + title + ": Silent Hill e The Last of Us");
    }
};
residentEvil8.getSimilars(residentEvil8.title);
console.log(residentEvil8.price); // 350
var residentEvil8Mods = {
    title: 'Resident Evil 8 Fun Mods',
    genre: 'Terror',
    price: 80,
    platform: ['PS5', 'Xbox', 'PC'],
    getSimilars: function (title) {
        console.log("Games similares a " + title + ": Silent Hill e The Last of Us");
    },
    originalGame: residentEvil8,
    newContent: ['Summer zombies', 'Infinite life']
};
console.log(residentEvil8Mods);
var CreateGame = /** @class */ (function () {
    function CreateGame(title, genre, platform, price, getSimilars) {
        this.title = title;
        this.genre = genre;
        this.platform = platform;
        this.price = price;
        this.getSimilars = getSimilars;
    }
    return CreateGame;
}());
var newgame = new CreateGame('Mortal Kombat', 'Fight', ['Mega Drive', 'Super Nintendo'], 50, function (title) { return console.log("Eu amo " + title); });
console.log(newgame);
console.log(newgame.getSimilars(newgame.title));
