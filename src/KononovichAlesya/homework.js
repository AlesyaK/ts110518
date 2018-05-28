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
// 2)
// писать функцию summator(), которая сумирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
var summator = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var sum = 0;
    rest.forEach(function (item) {
        if (typeof item === 'number') {
            sum += item;
        }
        else {
            sum += parseFloat(item);
        }
    });
    return sum;
};
// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.
var getUnique = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var newArr = [];
    rest.forEach(function (item) {
        if (newArr.indexOf(item) === -1) {
            newArr.push(item);
        }
    });
    return newArr;
};
// 4)
// Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// цифры и специальные символы должны остаться на месте
// s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
// s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// s1tar3t 2   low5  ->  t1rat3s 2   wol5
var reverseSentence = function (str) {
    var res = '';
    var strArr = str.split(' ');
    var newWorlds = [];
    if (strArr.length) {
        strArr.forEach(function (item) {
            var word = item;
            var reverseWord = '';
            var letters = [];
            var i = 0;
            for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
                var chr = word_1[_i];
                if (chr.match(/[a-zа-яё]/i)) {
                    letters.push(chr);
                }
            }
            letters = letters.reverse();
            for (var _a = 0, word_2 = word; _a < word_2.length; _a++) {
                var chr = word_2[_a];
                if (chr.match(/[a-zа-яё]/i)) {
                    reverseWord += letters[i];
                    i++;
                }
                else {
                    reverseWord += chr;
                }
            }
            newWorlds.push(reverseWord);
        });
    }
    res = newWorlds.join(' ');
    return res;
};
