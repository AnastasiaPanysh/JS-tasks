// 1. Реализуйте Singer – производный класс, базовый – Worker. 
// Класс Worker состоит из: свойств name, surname в конструкторе; метода getInfo(), с 
// помощью которого можно вывести одновременно имя и фамилию;
// Класс Singer наследует name, surname в конструкторе при помощи метода super и 
// дополнительно принимает и дополняет конструктор свойствами: years, birth, style; 
// класс включает метод getInfo(), который переопределяет метод базового класса и 
// расширяет его, отображая в консоль информацию о певце: years, birth, style.
// Необходимо вызвать метод getInfo из 2 экземпляров worker, singer


// interface iWorker {
//     name: string;
//     surname: string;
//     getInfo(): void;
// }

// interface iSinger {
//     name: string;
//     surname: string;
//     getInfo(): void;
//     years: number;
//     birth: number;
//     style: string;
// }

// class Worker_ implements iWorker {
//     name: string;
//     surname: string;
//     constructor(name: string, surname: string) {
//         this.name = name
//         this.surname = surname
//     }

//     getInfo(): void {
//         console.log(`имя:${this.name}, фамилия:${this.surname}`);
//     }
// }

// class Singer_ extends Worker_ implements iSinger {
//     name: string;
//     surname: string;
//     years: number;
//     birth: number;
//     style: string;
//     constructor(name: string, surname: string, years: number, birth: number, style: string) {
//         super(name, surname)
//         this.years = years
//         this.birth = birth
//         this.style = style
//     }

//     getInfo(): void {
//         super.getInfo()
//         console.log(`год:${this.years}, др:${this.birth}, стиль:${this.style}`);
//     }
// }

// const worker = new Worker_('Nastya', 'Panysh')
// worker.getInfo()

// const singer = new Singer_('Hanna', 'Pleshko', 22, 2000, 'rock')
// singer.getInfo()

// 2. Реализуйте класс NumberArray. NumberArray хранит функцию showArr, которая 
// заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
// является производным по отношению к базовому, родительскому NumberArray и 
// содержит функцию showArr. Необходимо переопределить showArr из базового 
// класса и записать в переменную используя метод super. Далее дополняем 
// переопределенный метод отображением результата в console

// interface iNumberArray {
//     showArr(): Array<number | string> | void
// }
// interface iConsoleArray {
//     showArr(): Array<number | string> | void
// }

// class NumberArray implements iNumberArray {
//     showArr(): Array<number | string> | void {
//         const arr: Array<number | string> = []
//         let i: number = 0
//         while (i < 5) {
//             arr.push(Math.floor(Math.random() * 10))
//             i++
//         }
//         return arr
//     }
// }

// class ConsoleArray extends NumberArray implements iConsoleArray {
//     showArr(): Array<number | string> | void {
//         const result: Array<number | string> | void = super.showArr()
//         console.log(result);

//     }
// }

// const numberArray = new NumberArray();
// const consoleArray = new ConsoleArray();
// consoleArray.showArr()

// 3. Реализуйте класс NumberArray. NumberArray хранит функцию sumArr, которая 
// заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
// является производным по отношению к базовому, родительскому NumberArray и 
// содержит функцию sumArr. Необходимо переопределить sumArr из базового 
// класса записав в переменную используя метод super. Далее посчитать сумму всех 
// элементов массива

// interface iNumberArray {
//     sumArr(): Array<number | string> | number
// }
// interface iConsoleArray {
//     sumArr(): Array<number | string> | number
// }

// class NumberArray implements iNumberArray {
//     sumArr(): Array<number | string> | number {
//         const arr: Array<number | string> = []
//         for (let i = 0; i < 5; i++) {
//             arr.push(Math.floor(Math.random() * 10))
//         }
//         return arr
//     }
// }

// class ConsoleArray extends NumberArray implements iConsoleArray {
//     sumArr(): Array<number | string> | number {
//         const result: Array<number | string> |number = super.sumArr()
//         const sum: number = result.reduce((sum, el) => sum + +el, 0)
//         return sum
//     }
// }

// const numberArray = new NumberArray();
// const consoleArray = new ConsoleArray();
// console.log(consoleArray.sumArr());

// 4. Реализуйте класс Pwd. Pwd хранит функцию showPwd, которая формирует и 
// возвращает рандомно сгенерированный пароль из 8 чисел. Класс Validation 
// является производным по отношению к базовому, родительскому Pwd и 
// содержит функцию showPwd. Необходимо переопределить showPwd из базового 
// класса и записать в переменную используя метод super. Далее дополняем 
// переопределенный метод отображением результата в console

// interface iPwd {
//     showPwd(): Array<number>|number;
// }

// class Pwd implements iPwd {
//     showPwd(): Array<number>|number {
//         const password: Array<number> = [];
//         for (let i = 0; i < 9; i++) {
//             password.push(Math.floor(Math.random() * 10));
//         }
//         return password;
//     }
// }

// class Validation extends Pwd {
//     constructor() {
//         super();
//     }

//     showPwd(): Array<number>|number{
//         const password = super.showPwd();
//         console.log(`Password: ${password}`); 
//         return password;
//     }
// }

// const validation = new Validation();
// validation.showPwd();


//5. Реализуйте Validation – производный класс, базовый – StringValue. 
// Класс StringValue состоит из: свойствa value в конструкторе;
// Класс Validation наследует value в конструкторе при помощи метода super и 
// дополнительно принимает и дополняет конструктор свойством: confirmValue; 
// класс Validation включает метод checkValue(), который проверяет, что 
// передаваемое значение value в конструктор – строка и состоит из букв. Также 
// добавить проверку на равенство value и confirmValue
// Необходимо вызвать метод checkValue экземпляра validation



// 6. Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить 
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на 
// сервер» (отправку запроса мы не проходили => просто вывести на экран 
// образовавщийся объект вида: {email: email, pwd: pwd}
// 7. Реализуйте класс Server, получающий объект из предыдущего задания и 
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать 
// генерацию нового id. Обязательными функциями считаются функции middleware, 
// controller, service, repository. Цепочка взаимодействия между методами 
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор 
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с 
// этим массивом осуществляется только в repository. Массив находится в 
// приложении
// [
// { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
// { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
// { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
// { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
// { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
//]





// interface iClient {
//     sendRequest(): void;
// }

// interface iServer {
//     middleware(): void;
//     controller():iData[];
//     service():iData[];
//     repository():iData[];
// }

// interface iData {
//     email: Element|null;
//     pwd:  Element|null;
// }

// class Client implements iClient {
//     sendRequest(): void {
//         document.querySelector('.btn')?.addEventListener('click', function () {
//             const obj: iData = { email: document.querySelector('/email'), pwd: document.querySelector('.pwd') }
//         })
//     }
// }

// class Server implements iServer {



// }




abstract class Worker {
    DoTasks() {
        console.log('hello');
    }
}

class Worke_r extends Worker {
constructor
}