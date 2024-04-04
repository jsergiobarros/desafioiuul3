"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
var Endereco = /** @class */ (function () {
    function Endereco() {
    }
    Object.defineProperty(Endereco.prototype, "cep", {
        get: function () {
            return this._cep;
        },
        set: function (value) {
            this._cep = value;
        },
        enumerable: false,
        configurable: true
    });
    return Endereco;
}());
exports.Endereco = Endereco;
