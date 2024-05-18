let results = "18";
console.log(results, "-", typeof(results));

// dot notation

let perInfo = {
    fName : "sreekanth",
    fLast :"peddarapu",
    age : 24 ,
    favBikes : ["ktm", "duke"],
}

let firstName = perInfo.favBikes;
console.log(firstName);

// bracket Notation

let myAge = perInfo["fLast"]
console.log(myAge);

// object distructing

let{ fName, fLast} = perInfo;

console.log(fName);
console.log(fLast);

// object methods

let keys = Object.keys(perInfo);

console.log(keys);

let keys2 = Object.values(perInfo);

console.log(keys2);

let keys3 = Object.entries(perInfo);

console.log(keys3)

// Array concepts

// push

let friends = ['surya','raju','sanjeev','sree'];

friends.push("karthik")
console.log(friends);

//pop 

friends.pop()
console.log(friends);

friends.pop()
console.log(friends);


friends.unshift("Venkat")
console.log(friends);


friends.shift()
console.log(friends);


// lenth method

let  lastName = "Peddarapu"
let firstName2 = "SReekanth"

let length = lastName.length;
console.log(length)

//index position
 let index = lastName[2];
 console.log(index)

 //slice

 let slice = lastName.slice(0,3);
 console.log(slice);

 //sub string

 let upper = lastName.toLocaleUpperCase()
  console.log(upper)

  let lower = lastName.toLowerCase()
  console.log(lower)
 
 let fName1 = "sreekanth";
 let lName2 = "peddarapu"

 let fullName = fName1.concat(lName2);

 console.log(fullName)

 let boolean = fName1.includes("sr");

 console.log(boolean)

 let replace = fName1.replaceAll('s','p');

 console.log(replace)
 

 let today = new Date();

 let year = today.getDate();
 console.log(today);
 console.log(year);

 let value2 = "8.435353";
let convertString = Number(value2)
console.log(typeof(convertString ));



if(true){
    let num1  = 10 ;
    let num2 = 20 ;
    let adding = `The adding num1 + num2 is = ${num1+num2}`

    console.log(adding);
}else{

}

console.log( 'solving' )

let movie1 = true;
let movie2 = false;


let friends1 = movie1 && movie2 ;

console.log(!movie1);


for(let Number=1; Number > 10; Number++ ){
    let arr = ["sreekanth","surya","bharath"]

    console.log(arr)
}

let firstName3 = "hello world";
 let reverse = firstName3.reverse(0,8);

 console.log(reverse);



 