// 1.
var user = new Object();
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;

// 2.
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };
var sum = 0;
for(let i in fruit){
    sum+=fruit[i]
}
console.log(sum);