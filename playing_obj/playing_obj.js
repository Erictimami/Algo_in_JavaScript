

console.log('------------------ Playing with objects -------------------:');

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log('age of John :   ', users[1].age);

console.log('name of 1st object :  ', users[0].name);

for(var i=0; i<users.length; i++){
    console.log(users[i].name,'-',users[i].age); 
}








