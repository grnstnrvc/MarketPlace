// define the available products
const products = [
  { name: "Apple", price: 0.99 },
  { name: "Banana", price: 0.49 },
  { name: "Orange", price: 0.79 },
  { name: "Mango", price: 1.49 },
  { name: "Pineapple", price: 2.99 },
];

// define the available payment methods
const paymentMethods = ["cash", "credit card", "debit card"];

// define a function to display the products
function displayProducts() {
  console.log("Available products:");
  for (let i = 0; i < products.length; i++) {
    console.log(`${i+1}. ${products[i].name} - $${products[i].price}`);
  }
}

// define a function to process a payment
function processPayment(amount, paymentMethod) {
  if (paymentMethods.includes(paymentMethod)) {
    console.log(`Payment of $${amount} received by ${paymentMethod}`);
  } else {
    console.log(`Invalid payment method: ${paymentMethod}`);
  }
}

// display the products
displayProducts();

// simulate a purchase
const productIndex = 2; // user selects the third product (Orange)
const product = products[productIndex];
const quantity = 3; // user wants to buy three oranges
const total = product.price * quantity;
const paymentMethod = "cash"; // user wants to pay with cash
console.log(`You want to buy ${quantity} ${product.name}(s) for a total of $${total}`);

// process the payment
processPayment(total, paymentMethod);
