    type stnum = Array<string | number>;
    type stnumbool = Array<string | number | boolean>;

    // 1)
    // Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    //     Возвращает true, если все аргументы, кроме первого входят в первый.
    //     Первым всегда должен быть массив.

    let isInArray = ( sArr: stnumbool[], ...rest: stnumbool[] ): boolean => {
        let flag: boolean = true;
        if ( !rest.length ) {
            flag = false;
        } else {
            rest.forEach(( item ) => {
               if ( sArr.indexOf( item ) === -1 ) {
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

    let summator = (...rest: stnum[] ): number  => {
        let sum: number = 0;
        rest.forEach( ( item ) => {
            if ( typeof item === 'number' ) {
                sum += item;
            } else {
                sum += parseFloat( item );
            }
        } );
        return sum;
    };

    // 3)
    // Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    //     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
    //     Порядок элементов результирующего массива должен совпадать с порядком,
    //     в котором они встречаются в оригинальной структуре.

    let getUnique = ( ...rest: stnumbool[] ): stnumbool[] => {
        const newArr: stnumbool[] = [];
        rest.forEach( ( item ) => {
            if ( newArr.indexOf( item ) === -1 ) {
                newArr.push( item );
            }
        } );
        return newArr;
    };

    // 4)
    // Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
    // цифры и специальные символы должны остаться на месте
    // s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
    // s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
    // s1tar3t 2   low5  ->  t1rat3s 2   wol5

    let reverseSentence = ( str: string ): string  => {
        let res: string = '';
        const strArr: string[] = str.split( ' ' );
        const newWorlds: string[] = [];
        if ( strArr.length ) {
           strArr.forEach( ( item ) => {
                const word = item;
                let reverseWord: string = '';
                let letters: string[] = [];
                let i = 0;
                for (const chr of word ) {
                    if ( chr.match(/[a-zа-яё]/i ) ) {
                        letters.push( chr );
                    }
                }
                letters = letters.reverse();
                for (const chr of word ) {
                    if ( chr.match(/[a-zа-яё]/i ) ) {
                        reverseWord += letters[i];
                        i++;
                    } else {
                        reverseWord += chr;
                    }
                }
                newWorlds.push( reverseWord );
           });
        }
        res = newWorlds.join( ' ' );
        return res;
    };
