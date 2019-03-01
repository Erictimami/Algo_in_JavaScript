
console.log('------------------ Exercise 1-------------------:');

function a1(){
    return 35;
}
console.log('a()   :',a1());


console.log('---------------- Exercise 2-------------------:');

function a2(){
    return 4;
}
console.log('(a()+a())  :',a2()+a2());



console.log('------------------ Exercise 3-------------------:');

function a3(b){
    return b;
}
console.log('a(2)+a(4) :',a3(2)+a3(4));



console.log('-------------------- Exercise 4--------------------:');

function a4(b){
	console.log('b  :', b);
	return b*3;
}
console.log('a(3) :',a4(3));

console.log('------------------ Exercise 5-------------------:');

function a5(b){
	return b*4;
	console.log('b  :',b);
 }
 console.log('a(10) :',a5(10));
 

console.log('---------------- Exercise 6-------------------:');

function a6(b){
    if(b<10) {
        return 2;
    }
	else {
        return 4;
    }
    console.log('b   :',b);
}
console.log('a(15) :',a6(15));



console.log('------------------ Exercise 7-------------------:');

function a7(b,c){
    return b*c;
}
console.log('10,3  :',10,3);
console.log(' a(3,10) :', a7(3,10) );



console.log('-------------------- Exercise 8--------------------:');

function a8(b){
    for(var i=0; i<10; i++){
        console.log('i  :',i);
    }
    return i;
}
console.log('3  :',3);
console.log('4  :',4);



console.log('------------------ Exercise 9-------------------:');

function a9(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log('i  :',i);
    }
}
a9();



console.log('---------------- Exercise 10-------------------:');

function a10(b,c){
    for(var i=b; i<c; i++) {
       console.log('i  :',i);
   }
   return b*c;
}
a10(0,10);
console.log('a(0,10)  :',a10(0,10));



console.log('------------------ Exercise 11-------------------:');

function a11(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log('i  :',i);
    }
}




console.log('-------------------- Exercise 12--------------------:');

function a12(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}


console.log('------------------ Exercise 13-------------------:');

var z = 10;
function a(){
    var z = 15;
    console.log('z  :', z);
}
console.log('z  :',z);



console.log('---------------- Exercise 14-------------------:');

var z = 10;
function a14(){
    var z = 15;
    console.log('z  :',z);
}
a14();
console.log('z  :',z);



console.log('------------------ Exercise 15-------------------:');

var z = 10;
function a15(){
    var z = 15;
    console.log('z  :',z);
    return z;
}
z = a15();
console.log('z  :',z);

