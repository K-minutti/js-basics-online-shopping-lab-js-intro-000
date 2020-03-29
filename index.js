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
  if (cart.length === 2) {
    for (let i in cart){
   return `In you cart, you have ${cart[i].itemName} at $${cart[i].itemPrice} and ${cart[i][-1].itemName} .`
      }
    }
}



function removeFromCart(item) {}

function total() {}

function placeOrder(cardNumber) {}
