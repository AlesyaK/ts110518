"use strict";
// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.
var isInArray = function (sArr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var flag = true;
    if (!Array.isArray(sArr) || !rest.length) {
        flag = false;
    }
    else {
        rest.forEach(function (item) {
            if (sArr.indexOf(item) === -1) {
                flag = false;
                return;
            }
        });
    }
    return flag;
};
