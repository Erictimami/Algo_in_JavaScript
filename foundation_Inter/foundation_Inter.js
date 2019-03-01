
console.log('-------------------------- Part 1---------------------------:');

console.log('------------------ Exercise 1-------------------:');

function sigma(num){
    var sum=0;
    for (var i=0; i<num+1; i++){
        sum+=i;
    }
    return sum;
}

console.log('sigma(5)  :',sigma(5));



console.log('---------------- Exercise 2-------------------:');

function factorial(num){
    var mult=1;
    for (var i=1; i<num+1; i++){
        mult*=i;
    }
    return mult;
}

console.log('factorial(5)  :',factorial(5));



console.log('------------------ Exercise 3-------------------:');

function fibonacci(num){
    var arr=[0, 1], fib_result=0;
    for (var i=2; i<num+1; i++){
        arr[i]=arr[i-2]+arr[i-1]; 
        fib_result=arr[i];
    }
    return fib_result;
}

console.log('fibonacci(7)  :',fibonacci(7));





console.log('-------------------- Exercise 4--------------------:');

function snd_last(arr){
    if(arr.length<2){
        return null;
    }
    else{
        return arr[arr.length-2];
    }
}
console.log('snd_last([42, true, 4, "Liam", 7])   :',snd_last([42, true, 4, "Liam", 7]));





console.log('------------------ Exercise 5-------------------:');

function N_from(arr, N){
    if(arr.length<N){
        return null;
    }
    else{
        return arr[arr.length-N];
    }
}
console.log('N_from([5,2,3,6,4,9,7],3)   :',N_from([5,2,3,6,4,9,7],3));



 

console.log('---------------- Exercise 6-------------------:');

function snd_larg(arr){
    var max_1=arr[0], max_2=arr[1], maxId=0;
    if(arr.length<2){
        return null;
    }
    else{
        for(var i=0; i<arr.length; i++){
            if(arr[i]>max_1){
                max_1=arr[i];
                maxId=i;  
            }
        }
        //max_2=arr[arr.length-1-maxId];
        for(var i=0; i<arr.length; i++){
            if((i!=maxId)&&(arr[i]>max_2)){
                max_2=arr[i];
            }
        }
    }
    return max_2;
}
console.log('snd_larg([42,1,4,3.14,7])   :',snd_larg([42,1,4,3.14,7]));



console.log('------------------ Exercise 7-------------------:');

function doubleElement(arr){
	var x=[];
	for(var i=0; i<arr.length; i++){
		for(var j=0; j<2; j++){
			x.push(arr[i]);
		}
	}
	return x;
  }
  console.log('doubleElement([4,"Ulysses",42,false])  :',doubleElement([4,'Ulysses',42,false]));




console.log('-------------------------- Part 2---------------------------:');

console.log('------------------ Exercise 1-------------------:');

function fibonacci(num){   //recursive function
    if(num<3){
        return 1;
    }
    return fibonacci(num-2)+fibonacci(num-1);
}
console.log('fibonacci(7)  :',fibonacci(7));



