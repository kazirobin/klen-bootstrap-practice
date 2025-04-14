console.clear();
/**
 * 
console.log("first");
let str = "this is a text";
let num = 10;
let active = true;
let inactive = null;
let dative = undefined;
let arr = [];
let obj = { number: 1 };
console.log(str);
console.log(typeof str);
console.log(num);
console.log(typeof num);
console.log(active);
console.log(typeof active);
console.log(inactive);
console.log(typeof inactive);
console.log(dative);
console.log(typeof dative);
console.log(arr);
console.log(typeof arr);
console.log(obj);
console.log(typeof obj);
*/

/**
 *
 */
/**
let a = 10 
let b = a
a = 20
 * 
let a = { number: 1 };
let b = a;
*/

// a.number = 2;
/** 
 * 
console.log("a =", a);
console.log("b =", b);
*/
// console.log("first");
const shoppingCart = ["a", "b", "c"];
// console.log(shoppingCart[shoppingCart.length - 1]);
function addCart(item) {
  shoppingCart.push(item);
  console.log(`now shoppingCart have ${shoppingCart.length} item`);
  console.log(`recently added ${shoppingCart[shoppingCart.length - 1]} item`);
}
addCart("d");
addCart("e");
console.log(shoppingCart);
// let a = shoppingCart.splice(2,1)
shoppingCart.splice(3, 1);
console.log(shoppingCart);
// console.log(a)