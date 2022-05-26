console.log('hello');
// Variables in javascript
// var , let , const
var name  = 'induja';
var channel;
channel = 'heyitsme'
var marks = 34;
marks = 0;
console.log(name , channel,marks);
// rule for creating javascript variables
// Cannot start with number 
// Can start with letter , number , _ , dollar 
//  Are Case sensitive 
var  city  = 'Delhi';
console.log(city);
const First_name = 'Hari';
// First_name = 'Harry'; const cannot be over written 
// const age;   always initialize it 
console.log(First_name);


//  let has blocl level scope 
// var has global scope 
{
    let city = 'Rampur';
    console.log(city);
}
const arr1 = [1,2,2,3,4];
// arr1 = [2 ,3 ,4] cannot do this 
arr1.push(45);
console.log(arr1);
// most common programming case types 
// camelCase
// kebab-case
// Snake_case
// PascalCase 
