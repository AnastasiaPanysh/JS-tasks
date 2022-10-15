// 12. Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

class Hashtag {

    doArr(n) {
        let arr = []
        for (let i = 0; i < n; i++) {
            arr.push(Math.floor(Math.random() * 100))
        }
        const newArr = this.doHashtag(arr);
        return newArr
    }

    doHashtag(newArr) {
        let hashtagArr = []
        for (let i = 0; i < newArr.length; i++) {
            hashtagArr.push('#' + newArr[i])
        }
        return hashtagArr
    }
}

const hashtag = new Hashtag();
console.log(hashtag.doArr(3));