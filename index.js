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
   return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, and ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}.`}

  if (cart.length > 2) {
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}, and ${cart[2]["itemName"]} at $${cart[2]["itemPrice"]}.`}
}

function total() {
  var sumTotal = 0;
  for (var i = 0; i < cart.length; i++) {
   var price = cart[i]['itemPrice']
   sumTotal = sumTotal += price
  }
  return sumTotal
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
   var namesOfItems = cart[i]['itemName']
  if (namesOfItems === item ) {
    cart.splice(indexOf(namesOfItems))
  }
  else { console.log(`That item is not in your cart.`);
  }
  return cart
}


function placeOrder(cardNumber) {}
