// 1. Реализуйте класс Singer, который будет наследовать от класса Worker.
// Класс Worker состоит из: свойства name, свойства surname, метода getFullName(),
// с помощью которого можно вывести одновременно имя и фамилию;
// Класс Singer наследует name, surname, также состоит из свойств years, birth, style и
// метода getMoreInfo(), который выводит информацию о певце: years, birth, style.
// Необходимо вызвать метод getMoreInfo


class Worker {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    getFullName() {
        console.log(`${this.name} ${this.surname}`);
    }
}

class Singer extends Worker {
    constructor(name, surname, years, birth, style) {
        super(name, surname)
        this.years = years;
        this.birth = birth;
        this.style = style;
    }

    getMoreInfo() {
        console.log(this.name, this.surname, this.years, this.birth, this.style);
    }
}
const worker= new Worker('Hanna', 22)
singer.getMoreInfo()

const singer= new Singer('Nastya', 'Panysh', 21,'27/11/00','rock')
singer.getMoreInfo()



