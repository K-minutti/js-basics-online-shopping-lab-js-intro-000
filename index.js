var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(name) {
 // name is equal to value passed
var price = Math.floor(Math.random() * 100 ) + 1;// price is equal to a randomly generated number between 0 & 1 to the 100th power
var item = { itemName: name, itemPrice: price };
cart.push(item);
return name + ` has been added to your cart.`;
}


function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
   }
  if (cart.length === 1 ) {
    for (let items in cart) {
      return `In your cart, you have ` +  cart[items].itemName + ` at $` + cart[items].itemPrice +`.`}
    }
  if (cart.length > 1){
for(let i =0, len=cart.length; i<len; i++ ) {
  //inner iterator
  for (let moreitems in cart[i]) {
    return  `In your cart, you have ${cart[i][moreitems]} at $${cart[i][moreitems]},`
  //  X at $X, // for all the items in between

  //   and x at $X.}
    // for the last object in the array
  }
 }
}
}
// if the cart array has more than one element it follows this format
// `In your cart, you have bananas at $17, and pancake batter at $5.` so we
// need it to include a ", after every element except the last and then one that adds "and"
// in front of the last element of the cart array

function removeFromCart(item) {}

function total() {}

function placeOrder(cardNumber) {}
