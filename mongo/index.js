const { log } = require('console');
const { MongoClient, ObjectId } = require('mongodb');

const MongoDBclient = new MongoClient('mongodb://127.0.0.1:27017')

const main = async () => {

    await MongoDBclient.connect()

    const db = MongoDBclient.db('hschool');

    //Сформируйте коллекцию students.
    const collection = db.collection('students');

    //Заполните коллекцию students документами, состоящими из "name", "age", "email" и "phone“
    // const data_1 = await collection.insertMany(
    //     [{ "name": "Иван Иванов", "age": 23, "email": "ivan.ivanov@example.by", "phone": "+375 (29) 123-56-90" },
    //     { "name": "Мария Петрова", "age": 27, "email": "maria.petrova@example.ru", "phone": "+375 (29) 555-55-55" },
    //     { "name": "Алексей Сидоров", "age": 21, "email": "aleksey.sidorov@example.com", "phone": "+375 (29) 999-99-99" },
    //     { "name": "Елена Кузнецова", "age": 25, "email": "elena.kuz@example.by", "phone": "+375 (29) 777-77-77" },
    //     { "name": "Дарья Плешко", "age": 25, "email": "darya.pleshko@example.ru", "phone": "+375 (29) 111-11-11" },
    //     { "name": "Марина Иванова", "age": 21, "email": "marina.ivanova@example.com", "phone": "+375 (29) 345-67-89" },
    //     { "name": "Игорь Петров", "age": 24, "email": "igor.petrov@example.com", "phone": "+375 (29) 234-56-78" },
    //     { "name": "Александра Сидорова", "age": 22, "email": "alex.sid@example.com", "phone": "+375 (29) 678-90-12" },
    //     { "name": "Сергей Кузнецов", "age": 20, "email": "sergey.kuznetsov@example.com", "phone": "+375 (29) 456-78-90" },
    //     { "name": "Олег Николаев", "age": 23, "email": "oleg.nik@example.com", "ru": "+375 (29) 678-90-12" },
    //     { "name": "Екатерина Смирнова", "age": 25, "email": "kate.smir@example.com", "phone": "+375 (29) 234-56-78" },
    //     { "name": "Артем Федоров", "age": 19, "email": "artem.fedorov@example.ru", "phone": "+375 (29) 345-67-89" },
    //     { "name": "Мария Попова", "age": 26, "email": "maria.popova@example.by", "phone": "+375 (29) 789-01-23" }]

    // );

    // console.log(data_1);


    // //Отобразите коллекцию из всех студентов
    // const data_2 = await collection.find().toArray()
    // console.log(data_2);

    // //Отобразите всех студентов из коллекции "students" с возрастом от 20 до 25 лет.
    // const data_3 = await collection.find({
    //     $and: [
    //         { age: { $gt: 20 } },
    //         { age: { $lt: 25 } }
    //     ]
    // }).toArray()
    // console.log(data_3);

    // //Найдите документ в коллекции "students" по name "Елена Кузнецова" и обновите возраст на новое значение.
    // const data_4 = await collection.updateOne(
    //     { name: "Елена Кузнецова" },
    //     { $set: { age: 30 } }
    // )
    // console.log(data_4);


    // //Отобразите студента из коллекции "students", где name "Елена Кузнецова" 
    // const data_5 = await collection.find({
    //     name: "Елена Кузнецова"
    // }).toArray()
    // console.log(data_5);

    //Отобразите количество студентов коллекции "students"
    // const count_1 = await collection.countDocuments()
    // console.log(`Количество студентов: ${count_1}`)

    //Удалите все документы из коллекции "students", которые имеют возраст менее 18 лет.
    // const data_6 = await collection.deleteMany({ age: { $lt: 18 } });
    // console.log(data_6);


    //Отобразите количество студентов коллекции "students" где возраст от 20
    // const count_2 = await collection.countDocuments({ age: { $gte: 20 } });
    // console.log(`Количество студентов старше 20: ${count_2}`)

    //Удалите документ из коллекции "students" по любому уникальному идентификатору
    // const idToDelete = new ObjectId('64497692c734ef8a69e909fd');
    // const deleted = await collection.deleteOne({ _id: idToDelete });
    // console.log(deleted);

    //Используя оператор запросов $regex(regular expression), найдите всех студентов из коллекции "students", чьи адреса электронной почты заканчиваются на ".com".
    // const data_7 = await collection.find({ email: { $regex: /\.com$/ } }).toArray()
    // console.log(data_7);

    //Вывести список студентов, чьи имена начинаются на букву "А".
    // const data_8 = await collection.find({name: {$regex: /^А/}}).toArray()
    // console.log(data_8);

    //Вывести список студентов, чьи возрасты меньше 25 лет.

    // const data_9 = await collection.find({ age: { $lt: 25 } }).toArray()
    // console.log(data_9);

    //Вывести список студентов, у которых номер телефона начинается на "+375 (29)".
    // const data_10 = await collection.find({phone: {$regex: /^\+375 \(29\)/}}).toArray()
    // console.log(data_10);

    // Вывести список студентов, чьи электронные адреса содержат слово "example".
    // const data_11 = await collection.find({ email: { $regex: /example/ } }).toArray()
    // console.log(data_11);

    //Вывести список студентов, чьи имена состоят более чем из одного слова.
    // const data_12 = await collection.find({name: {$regex: /\s{2,}/}}).toArray()
    // console.log(data_12);

    // Найти студентов, у которых имя начинается на "А" и номер телефона заканчивается на "9".
    // const data_13 = await collection.find({
    //     $and: [
    //         ({ name: { $regex: /^А/ } }),
    //         ({ phone: { $regex: /(\+375\s\(29\)\s\d{3}-\d{2}-9\d)$/} })
    //     ]
    // }).toArray()
    // console.log(data_13);

    // Найти самого молодого студента.//как order by
    // const data_14 = await collection.aggregate([
    //     { $sort: { age: 1 } },
    //     { $limit: 1 }
    // ]).toArray()
    // console.log(data_14);

    // Найти самого старого студента.
    // const data_15 = await collection.aggregate([
    //     { $sort: { age: -1 } },
    //     { $limit: 1 }
    // ]).toArray()
    // console.log(data_15);

    //Найти количество студентов моложе 22 лет.
    // const data_16 = await collection.countDocuments({ age: { $lt: 22 } })
    // console.log(data_16);

    //Найти количество студентов старше 25 лет.
    // const data_17 = await collection.countDocuments({ age: { $gt: 25 } })
    // console.log(data_17);

    // Обновить номер телефона студента "Иван Иванов" на "+375 (29) 555-55-55".
    // const data_18 = await collection.updateOne(
    //     { name: "Иван Иванов" },
    //     { $set: { phone_number: "+375 (29) 555-55-55" } }
    // )
    // console.log(data_18)

    //Установить возрасту 23 года всем студентам, чье имя начинается на букву "М".
    // const data_19 = await collection.updateMany(
    //     { name: { $regex: /^М/ } },
    //     { $set: { age: 23 } }
    // )
    // console.log(data_19)

    // Заменить почту студентки "Елена Кузнецова" на "elena.kuz@example.com".
    // const data_20 = await collection.updateOne(
    //     { name: "Елена Кузнецова" },
    //     { $set: { email: "elena.kuz@example.com" } }
    //  )
    // console.log(data_20)

    //Добавить поле "group" со значением "A1" всем студентам, у которых возраст меньше 25 лет.
    //     const data_21 = await collection.updateMany(
    //         { age: { $lt: 25 } },
    //         { $set: { group: "A1" } }
    //     )
    //     console.log(data_21)

    // Найдите количество студентов с одинаковым возрастом.
    // const data_22 = await collection.aggregate([
    //     {
    //         $group: {
    //             _id: "$age",
    //             count: { $sum: 1 }
    //         }
    //     }
    // ]).toArray()
    // console.log(data_22);

    //Найти среднее значение длины имен студентов.
    // const data_23 = await collection.aggregate([
    //     {
    //         $group: {
    //             _id: null,
    //             totalLength: { $sum: { $strLenCP: "$name" } },
    //             count: { $sum: 1 }
    //         }
    //     },
    //     {
    //         $project: {
    //             _id: 0,
    //             avgLength: { $divide: ["$totalLength", "$count"] }
    //         }
    //     }
    // ]).toArray()
    // console.log(data_23);

    //Найти максимальную длину имени среди студентов.
    // const data_23 = await collection.aggregate([
    //     { $project: { nameLength: { $strLenCP: "$name" } } },
    //     { $group: { _id: null, maxLength: { $max: "$nameLength" } } }
    // ]).toArray()
    // console.log(data_23);

    //Найти минимальную длину имени среди студентов.
    // const data_23 = await collection.aggregate([
    //     { $project: { nameLength: { $strLenCP: "$name" } } },
    //     { $group: { _id: null, minLength: { $min: "$nameLength" } } }
    // ]).toArray()
    // console.log(data_23);

    // Найти среднее значение возраста среди студентов с длиной имени более 10 символов.


    // Найдите средний возраст всех студентов из коллекции "students".


    // Удалить номер телефона у студентов, чье имя начинается на букву "А".

    
    // Удалить коллекцию 

}


main()