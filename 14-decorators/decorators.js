// Class Decorator
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function setAPIVersion(apiVersion) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.version = apiVersion;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var API = /** @class */ (function () {
    function API() {
    }
    API = __decorate([
        setAPIVersion('1.0.0')
    ], API);
    return API;
}());
console.log(new API());
// Property Decorator
function titleMinLength(length) {
    return function (target, key) {
        var lengthValue = target[key];
        var getter = function () { return lengthValue; };
        var setter = function (value) {
            if (value.length < length) {
                console.log("Erro: A propriedade " + key + " deve ter pelo menos " + length + " caracteres!");
            }
            else {
                lengthValue = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
var Movie = /** @class */ (function () {
    function Movie(t) {
        this.title = t;
    }
    __decorate([
        titleMinLength(50),
        __metadata("design:type", String)
    ], Movie.prototype, "title", void 0);
    return Movie;
}());
var titanic = new Movie('Titanic');
console.log(titanic);
// Method Decorator
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value; // O value é a função original
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms / 1000 + " segundos para executar...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello! " + this.greeting);
    };
    __decorate([
        delay(3000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var fulano = new Greeter('Fulano da Silva');
fulano.greet();
