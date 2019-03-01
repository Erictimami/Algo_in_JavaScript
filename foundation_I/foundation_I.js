
console.log('------------------ Exercise 1-------------------:');

function ret(){
    var arr=[];
    for (var i=1; i<256; i++){
        arr.push(i);
    }
    return arr;
}
console.log('Number 1 to 255:  ',ret());



console.log('---------------- Exercise 2-------------------:');

function sum_even(){
    var sum=0;
    for (var i=0; i<1001; i+=2){
        sum+=i;
    }
    return sum;
}

console.log('sum of even from 1 to 1000  :',sum_even());



console.log('------------------ Exercise 3-------------------:');

function sum_odd(){
    var sum=0;
    for (var i=1; i<5000; i+=2){
        sum+=i;
    }
    return sum;
}
console.log('sum of odd from 1 to 5000  :',sum_odd());


console.log('-------------------- Exercise 4--------------------:');

function sum_array(arr){
    var sum=0;
    for (var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

console.log('sum_array([-5,2,5,12])   :',sum_array([-5,2,5,12]));




console.log('------------------ Exercise 5-------------------:');

function max_array(arr){
    max=arr[0];
    for (var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log('max_array([-3,3,5,7])   :',max_array([-3,3,5,7]));

 

console.log('---------------- Exercise 6-------------------:');

function avg_array(arr){
    var sum=0;
    for (var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log('avg_array([1,3,5,7,20])   :',avg_array([1,3,5,7,20]));


console.log('------------------ Exercise 7-------------------:');

function array_odd(){
    arr=[];
    for (var i=1; i<50; i+=2){
        arr.push(i);
    }
    return arr;
}
console.log('array of odd from 1 to 50 :',array_odd());



console.log('-------------------- Exercise 8--------------------:');

function count_max(arr, y){
    var count=0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]>y){
            count++;
        }
    }
    return count;
}
console.log('count_max([1,3,5,7],3))   :',count_max([-3,3,5,7],3));



console.log('------------------ Exercise 9-------------------:');

function square(arr){
    for (var i=0; i<arr.length; i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}
console.log('square([1,5,10,-2])  :',square([1,5,10,-2]));



console.log('---------------- Exercise 10-------------------:');

function replaceZ(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}
console.log('replaceZ([1,5,10,-2])  :',replaceZ([1,5,10,-2]));



console.log('------------------ Exercise 11-------------------:');

function maxMinAvg(arr){
    var max=arr[0], min=arr[0], sum=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
        if (arr[i]>max){
            max=arr[i];
        }
        if (arr[i]<min){
            min=arr[i];
        }
    }
    return [max, min, sum/arr.length];
}

console.log('maxMinAvg([1,5,10,-2])  :',maxMinAvg([1,5,10,-2]));



console.log('-------------------- Exercise 12--------------------:');

function swap(arr){
    [arr[0], arr[arr.length-1]]=[arr[arr.length-1], arr[0]];
    return arr;
}
console.log('swap([1,5,10,-2])  :',swap([1,5,10,-2]));



console.log('------------------ Exercise 13-------------------:');

function replaceN(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}

console.log('replaceN([-1,-3,2])  :',replaceN([-1,-3,2]));

