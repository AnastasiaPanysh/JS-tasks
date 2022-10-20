// 1. Реализуйте класс Singer, который будет наследовать от класса Worker.
// Класс Worker состоит из: свойства name, свойства surname, метода getFullName(),
// с помощью которого можно вывести одновременно имя и фамилию;
// Класс Singer наследует name, surname, также состоит из свойств years, birth, style и
// метода getMoreInfo(), который выводит информацию о певце: years, birth, style.
// Необходимо вызвать метод getMoreInfo


// class Worker {
//     constructor(name, surname) {
//         this.name = name
//         this.surname = surname
//     }

//     getFullName() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// class Singer extends Worker {
//     constructor(name, surname, years, birth, style) {
//         super(name, surname)
//         this.years = years;
//         this.birth = birth;
//         this.style = style;
//     }

//     getMoreInfo() {
//         console.log(this.name, this.surname, this.years, this.birth, this.style);
//     }
// }
// const worker= new Worker('Hanna' 22)
// singer.getMoreInfo()

// const singer= new Singer('Nastya', 'Panysh', 21,'27/11/00','rock')
// singer.getMoreInfo()



// 2. Реализуйте класс Elem. В нем есть функция html, принимающая строку, селектор.
// Необходимо отобазить на странице тест в соответствующий селектор


// class Elem {
//     constructor(str) {
//         this.str = str

//     }

//     html() {
//        document.querySelector(this.str).textContent='hello,Hanna'

//     }
// }

// const elem=new Elem('p')
// elem.html()

// 3. Реализуйте класс Html. В нем функцию renderArr, принимающую селектор. Вам
// неоходимо отобразить массив ['Minsk', 'Brest', 'Vitebsk'] в принимаемый селектор

// class Html {

//     constructor(str, arr) {
//         this.str = str
//         this.arr = arr
//     }

//         renderArr() {
//         document.querySelector(this.str).textContent = this.arr

//     }
// }

// const html = new Html('.res', ['Minsk', 'Brest', 'Vitebsk']);
// html.renderArr()


// class Html {

//     constructor(str) {
//         this.str = str
//         this.doArray()
//     }

//     doArray() {
//         document.querySelector('.btn').addEventListener('click', () => {
//             const input = +document.querySelector('input').value
//             let arr = [];
//             for (let i = 0; i < input; i++) {
//                 arr.push(Math.floor(Math.random()*10))
//             }
//             this.renderArr(arr);
//         })
//     }

//     renderArr(arr) {
//         document.querySelector(this.str).textContent = arr
//     }
// }

// const html = new Html('.res');

// 4. Дополнить 3. Значения массива отображать одиз за одним через appendChild
// 5. Добавить скролл к 4 заданию
// class Html {

//     constructor(str) {
//         this.str = str
//         this.doArray()
//     }

//     doArray() {
//         document.querySelector('.btn').addEventListener('click', () => {
//             document.querySelector(this.str).innerHTML = ''
//             let input = +document.querySelector('input').value
//             let arr = [];
//             for (let i = 0; i < input; i++) {
//                 arr.push(Math.floor(Math.random() * 10))
//             }
//             for (let i = 0; i < arr.length; i++) {
//                 const teg = document.createElement('p');
//                 teg.textContent = arr[i]
//                 this.renderArr(teg);
//             }
//         })
//     }

//     renderArr(teg) {
//         document.querySelector(this.str).appendChild(teg)
//     }
// }

// const html = new Html('.res');


// 6. Сила методов класса заключается в возможности иметь множество реализаций.
// Реализуйте 2 класса с 2 различными реализациями

class A {
    random() {
        console.log('bonjour');
    }
}

class B extends A {
    random() {
        super.random();
        console.log('hi');
    }
}

class C extends B {
    random() {
        super.random();
        console.log('hello');

    }
}

const a = new A()
const b = new B()
const c = new C()

a.random()
console.log('--------------------------');
b.random()
console.log('--------------------------');
c.random()