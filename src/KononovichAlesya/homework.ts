// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.

    let isInArray: ( sArr: Array<string | symbol | number>, ...rest: any[] ) => boolean =
    ( sArr: Array<string | symbol | number>, ...rest: any[] ) => {
        let flag: boolean = true;
        if ( !Array.isArray( sArr ) || !rest.length ) {
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
