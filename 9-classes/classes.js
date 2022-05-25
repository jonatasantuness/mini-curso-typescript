var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("O jogador " + this.name + " possui " + this.age + " anos de idade.");
    };
    return UserAccount;
}());
var jonatas = new UserAccount('Jonatas', 30);
console.log(jonatas);
console.log(jonatas.name);
jonatas.logDetails();
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            console.log('obtendo o level!');
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.showNickname = function () {
        console.log("O nickname do user " + this.name + " \u00E9 " + this.nickname);
    };
    CharAccount.prototype.showBirthdayUser = function () {
        console.log("O jogador tem " + this.age + " anos de idade");
    };
    return CharAccount;
}(UserAccount));
var johnnyaccount = new CharAccount('Jonatas', 29, 'johnnysk8', 10);
johnnyaccount.logDetails();
// johnnyaccount.nickname = 'johnnycash'
johnnyaccount.showNickname();
console.log(johnnyaccount.level);
// johnnyaccount.level = 23
johnnyaccount.showBirthdayUser();
// console.log(johnnyaccount.age)
console.log(johnnyaccount.getLevel);
johnnyaccount.setName = 'Johnny';
console.log(johnnyaccount.name);
var ClasseAbstrata = /** @class */ (function () {
    function ClasseAbstrata(teste) {
        this.teste = teste;
    }
    return ClasseAbstrata;
}());
// const testeClasseAbstrada = new ClasseAbstrata('teste')
