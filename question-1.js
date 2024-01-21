// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
// 1.
inventory.apple.quantity = 200;
//console.log(inventory.apple)

// 2.
inventory.orange = { price: 20, quantity: 300 };
//console.log(inventory.orange)

// 3.
let totalPrice = 0;
for (let key in inventory) {
  totalPrice += inventory[key].price * inventory[key].quantity
}
//console.log(totalPrice)

// 4.
console.log(`Total inventory value: ${totalPrice} baht`)
