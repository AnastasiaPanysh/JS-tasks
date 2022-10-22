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