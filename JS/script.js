// const fruits = ["apple", "cherry", "banana"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits.length);
// console.log(fruits[fruits.length] = "vkjs");
// console.log(fruits.length);

// const cars = ["apple", "cherry", "tesla"];
// console.log(cars.pop());
// console.log(cars)
// console.log(cars.push("tesla"));
// console.log(cars)
// console.log(cars.shift());
// console.log(cars)
// console.log(cars.unshift());
// console.log(cars)


// const cars = ["apple", "cherry", "tesla"];
// console.log(cars);
// console.log(cars.reverse());
// console.log(cars.fill("car",0,1,2,3))


// const words = ["bjji", "zfs", "d", ["a", "gfgrwe", ["wwd", "d"]], "e", "u", "a"];
// const numbers = [1, 4, 74, 435, 34, 43]
// console.log(words.sort());
// console.log("z" > "a");

// console.log(numbers.find(el => el > 5));

// console.log(words.filter(word => word == 'a'));

// console.log(words[3][1]);

// console.log(words.flat(Infinity));


// // words.forEach(el => console.log(el))
// // console.log(words.map(el => el));

// // object

// const userInfo = {
//     id: 1,
//     name: "Alex",
//     lastName: "Moralez",
//     age: 54,
//     isProgrammer: true,
//     movieList: ['jojoker', 'azazin', 'mib'],

// }; 
// // console.log(userInfo.num);
// // console.log(userInfo['movieList']);
// // console.log(userInfo['movieList'][0]);
// // console.log(userInfo.isProgrammer);
// // console.log(userInfo['lastName']);
// // console.log(userInfo.num = 2);
// // console.log(userInfo);

// for(let key in userInfo) {
//     // console.log(key);
//     // console.log("the object key:" + key + ':' + userInfo[key]);
//     // console.log(`the object key: ${key}: ${userInfo[key]}`);
// };

let cars = {
    name: "bmw",
    model: 'm5',
    color: 'white',
    isOld: true,
    getModel: function() {
        console.log('my name is : ' + this);
    }
}

cars.getModel();
console.log(this);

// alert('hi')