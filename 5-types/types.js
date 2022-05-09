// boolean
var isOpen;
isOpen = true;
// string
var message;
var user;
message = 'Hello';
user = 'Jonatas';
console.log("Hello " + user);
// number
var total = 23;
console.log(total);
var hexNum = 0xf00;
console.log(hexNum);
// array
var items;
items = ['Iphone x', 'carregador Apple', 'Fone de ouvido'];
console.log(items);
var prices;
prices = [3500, 350, 200];
console.log(prices);
// tuple
var soccerPlayer;
soccerPlayer = [9, 'ronaldo'];
console.log(soccerPlayer);
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
console.log(Colors);
// any
var coisa;
coisa = 'qualquer coisa';
console.log(coisa);
// void
function logger() {
    console.log('Função sem retorno!');
}
console.log(logger());
// never
function testError() {
    throw new Error('Erro de teste');
}
// Object
var cart;
cart = {
    items: ['Banana', 'Leite', 'Bolo'],
    total: 50.0
};
console.table(cart);
