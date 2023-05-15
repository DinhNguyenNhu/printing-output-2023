//Task 1
let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
let print = `
    let a = 3;
    let b = 5;
    let c;
    ----------
    a + b = ${a+b}
    a - b = ${a-b}
    a * b = ${a*b}
    a / b = ${a/b}
    a % b = ${a%b}
    (a += b): ${a+=b}
    (a -= b): ${a-=b}
    (a *= b): ${a*=b}
    (a /= b): ${a/=b}
    (a %= b): ${a%=b}
    (a == b): ${a==b}
    (a != b): ${a!=b}
    (a > b): ${a>b}
    (a < b): ${a<b}
    (!a && !c): ${!a&&!c}
    (!a || !c): ${!a||!c}
    `;
alert(print);
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

//Task 2
let first_name = "Dinh Nguyen";
let last_name = "Nhu";
let email = "nhu00001@algonquinlive.com";

let output;

output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;
alert(output);

