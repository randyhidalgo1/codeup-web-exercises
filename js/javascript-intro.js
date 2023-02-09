// let a = 1;
// let b = a++;
// let c = ++a;
// let value= (a, b, c)
// console.log (value)
// answer 3

// let d = "hello";
// let e = false;
// console.log(d++)
// hello = Nan
// false = 0

// let perplexed;
// console.log (perplexed + 2)
//Nan

// let price = 2.7;
// price.toFixed(2);
// console.log (price)
// // answer 2.7

// let price = "2.7";
// price.toFixed(2);
// console.log (price)
// // console.log (price + toFixed (2));
// // answer 2.7

// let isNaN=(0)
// console.log (isNaN)
// Answer 0

// let isNaN=(1)
// console.log (isNaN)
// answer 1

// isNaN("")
// console.log( isNaN("") )
// Answer False

// isNaN("string");
// console.log(isNaN ("string"));
// answer true

// isNaN("0")
// console.log(isNaN ("0"))
// Answer False

// isNaN("1");
// console.log(isNaN ("1"));
// Answer False

// isNaN("3.145")
// console.log(isNaN (3.145))
// Answer false

// isNaN(Number.MAX_VALUE)
// console.log(isNaN (Number.MAX_VALUE))
// Answer False

// isNaN(Infinity);
// console.log(isNaN (Infinity));
// Answer False

// isNaN("true")
// console.log(isNaN ("true"));
// Answer True

// isNaN(true)
// console.log(isNaN (true));
// Answer False

// isNaN("false")
// console.log(isNaN (false))
// Answer False

// isNaN(false)
// console.log(isNaN(false
// ))
// Answer False


// console.log(NaN == NaN)
// console.log(isNaN == NaN)
// answer false, false


// !true = false
// !false = true
// !!true = true
// !!false = false
// !!0 = False
// !!-0 = false
// !!1 = True
// !!-1 = true
// !!0.1 = True
// !!"hello" = True
// !!"" = False
// !!'' = False
// !!"false" = True
// !!"0" = True

// let sample = "Hello Codeup";
// sample.toUpperCase();
// let newsample = sample.replace("Codeup", "class")
// let index = newsample.indexOf("c")
// let sub = sample.substring(6)
// console.log(sub);
// answer 12
// index when "C" capped get you -1 and small Cap = 6

// let mermaid = 3;
// let brotherBear = 5;
// let hercules = 1;
// let price = 3.00;
// let totalCost = (mermaid + brotherBear + hercules) * price;
// console.log (totalCost)

// let google = (400 * 10);
// let amazon = (380 * 4);
// let facebook = (350 * 6);
// let total = (google + amazon + facebook)
// console.log(facebook)

// let classNotFull = true;
// let classNotConflict = false;
// let studentCanEnroll = classNotFull && classNotConflict;
// if (studentCanEnroll) {
//     console.log("The student can enroll in the class.");
// } else {
//     console.log("The student cannot enroll in the class.");
// }
// console.log(studentCanEnroll)

// let productoffer =2;
// let offerexpiration = true
// let premiummembers = true
// let offerapply = (productoffer >= 2 && premiummembers) && offerexpiration;
// console.log(productoffer && offerexpiration && premiummembers && offerapply)

// let username = 'codeup';
// let password = 'notastrongpassword';
// let pwlength= password.length >= 5;
// let pwusername = password.indexOf(username) === -1;
// let username20chars = username.length <= 20;
// let usernamewhitespace = !(/\s/.test(username) && /\s/.test(username));
// let pwwhitespace = !(/\s/.test(password) && /\s$/.test(password));
// let goodtogo = pwlength && pwusername && username20chars && usernamewhitespace && pwwhitespace;
// console.log(`Is the username and password valid? ${goodtogo}`);