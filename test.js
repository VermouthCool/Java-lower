"use strict";
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
var a = true;
var b = 10;
var c = "jian";
var d = [[]];
var e = [[1]];
var f = ["1", 2, true];
var g;
(function (g) {
    g[g["success"] = 1] = "success";
    g[g["false"] = 0] = "false";
})(g || (g = {}));
;
var i;
(function (i) {
    i[i["red"] = 0] = "red";
    i[i["blue"] = 5] = "blue";
    i[i["orange"] = 6] = "orange";
})(i || (i = {}));
var h = g.success;
var j = i.red;
var j1 = i.orange;
// var oBox = document.getElementById("jian");
// oBox.style.color = "red";
var aa = undefined;
var ab = null;
var ac;
function Jian(a) {
}
function ad(a, b) {
    console.log(a);
}
ad(10, "jian");
var Person = (function () {
    function Person(age) {
        this.age = age;
    }
    return Person;
}());
var Lai = (function (_super) {
    __extends(Lai, _super);
    function Lai(age) {
        return _super.call(this, age) || this;
    }
    return Lai;
}(Person));
var af = new Lai(10);
class cc{
    constructor(a){
        this.age = a;
    }
}

console.log(typeof [1,2,3] );
