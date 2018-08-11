var Product = require("../models/product");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/OnlineOrder");

var products = [
  new Product({
    category: "Appetizers",
    title: "Egg Rolls(Porpia Tod)",
    description: "",
    price: 5.95
  }),
  new Product({
    category: "Appetizers",
    title: "Vegetarian Egg Rolls",
    description: "",
    price: 5.95
  }),
  new Product({
    category: "Appetizers",
    title: "Crab Rangoon",
    description: "",
    price: 4.95
  }),
  new Product({
    category: "Appetizers",
    title: "Thai Wings",
    description: "",
    price: 5.95
  }),
  new Product({
    category: "Appetizers",
    title: "Cheese Stick",
    description: "",
    price: 4.95
  }),
  new Product({
    category: "Salads",
    title: "Thai Green Salad",
    description: "",
    price: 4.95
  }),
  new Product({
    category: "Salads",
    title: "Spicy Shrimp",
    description: "",
    price: 10.95
  }),
  new Product({
    category: "Salads",
    title: "Bean Noodle Salad",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Curries",
    title: "Mussaman Curry",
    description: "",
    price: 9.95
  }),
  new Product({
    category: "Curries",
    title: "Panaeng Curry",
    description: "",
    price: 9.95
  }),
  new Product({
    category: "Curries",
    title: "Emerald Curry",
    description: "",
    price: 9.95
  }),
  new Product({
    category: "Curries",
    title: "Yellow Curry",
    description: "",
    price: 9.95
  }),
  new Product({
    category: "Curries",
    title: "Red Curry",
    description: "",
    price: 9.95
  }),
  new Product({
    category: "Fried Rice",
    title: "Chicken Fried Rice",
    description: "",
    price: 7.95
  }),
  new Product({
    category: "Fried Rice",
    title: "Shrimp Fried Rice",
    description: "",
    price: 9.95
  }),
  new Product({
    category: "Fried Rice",
    title: "Vegetable Fried Rice",
    description: "",
    price: 7.95
  }),
  new Product({
    category: "Fried Rice",
    title: "Curry Fried Rice",
    description: "",
    price: 9.95
  }),
  new Product({
    category: "Fried Rice",
    title: "Basil Fried Rice",
    description: "",
    price: 7.95
  }),

  new Product({
    category: "Fried Rice",
    title: "Tom Yum Fried Rice",
    description: "",
    price: 7.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Garlic & Pepper",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Sweet & Sour Pork",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Chicken & Cashew",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Pad Thai",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Soy Sauce Noodle",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Noodle Platter",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Paneang Curry",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Emerald Curry",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Red Curry",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Sea Food Chilli Oil",
    description: "",
    price: 10.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Sea Food Pad Cha",
    description: "",
    price: 10.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Combo Spicy Sauce",
    description: "",
    price: 12.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Garlic & Pepper",
    description: "",
    price: 9.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Sweet & Sour",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Sweet & Sour Vegetables",
    description: "",
    price: 7.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Chicken & Cashew",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Laab",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Beef with oyster Sauce",
    description: "",
    price: 9.95
  }),

  new Product({
    category: "Main Course(served with rice)",
    title: "Khao Na Gai",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Pad Kra Phow",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Main Course(served with rice)",
    title: "Mix Vegeyables",
    description: "",
    price: 7.95
  }),

  new Product({
    category: "Main Course(served with rice)",
    title: "Rad Na Stir-Fry",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Stir-Fried Noodles",
    title: "Pad Thai",
    description: "",
    price: 8.5
  }),
  new Product({
    category: "Stir-Fried Noodles",
    title: "Soy Sauce Noodle",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Stir-Fried Noodles",
    title: "Bassil Leaves Noodle",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Stir-Fried Noodles",
    title: "Noodle Platter",
    description: "",
    price: 8.95
  }),

  new Product({
    category: "Stir-Fried Noodles",
    title: "Pad Woonsen",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Stir-Fried Noodles",
    title: "Pad Mee Korat",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Stir-Fried Noodles",
    title: "Emerald Nam Ya",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Stir-Fried Noodles",
    title: "Thai Hot Suki",
    description: "",
    price: 9.95
  }),
  new Product({
    category: "Stir-Fried Noodles",
    title: "Pretee Noodle",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Soups",
    title: "Thai Wonton Soup",
    description: "",
    price: 5.95
  }),
  new Product({
    category: "Soups",
    title: "Pho Noodle Soup",
    description: "",
    price: 7.95
  }),
  new Product({
    category: "Soups",
    title: "Xongs Pho Noodle Soup",
    description: "",
    price: 7.95
  }),
  new Product({
    category: "Soups",
    title: "Noodle Tom Yom",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Soups",
    title: "Hot & Sour Soup",
    description: "",
    price: 9.95
  }),
  new Product({
    category: "Soups",
    title: "Chicken Coconut Milk Soup",
    description: "",
    price: 8.95
  }),
  new Product({
    category: "Soups",
    title: "Rice Soup",
    description: "",
    price: 5.95
  }),
  new Product({
    category: "Kids Menu",
    title: "Corn Dog",
    description: "",
    price: 3.95
  }),
  new Product({
    category: "Kids Menu",
    title: "Chicken Strips",
    description: "",
    price: 4.5
  }),
  new Product({
    category: "Kids Menu",
    title: "Chicken Fried Rice",
    description: "",
    price: 5.95
  }),
  new Product({
    category: "Kids Menu",
    title: "Soy Sauce Noodle With Chicken",
    description: "",
    price: 5.95
  }),
  new Product({
    category: "Sides",
    title: "White Rice",
    description: "",
    price: 1.95
  }),
  new Product({
    category: "Sides",
    title: "Fried Rice",
    description: "",
    price: 2.95
  }),
  new Product({
    category: "Sides",
    title: "Noodles",
    description: "",
    price: 2.95
  }),
  new Product({
    category: "Desserts",
    title: "Asian Donuts with Thai Custard",
    description: "",
    price: 4.95
  }),
  new Product({
    category: "Desserts",
    title: "Mango with Sweet Sticky Rice",
    description: "",
    price: 5.95
  }),
  new Product({
    category: "Drinks",
    title: "Fresh young coconut juice",
    description: "",
    price: 1.95
  }),
  new Product({
    category: "Drinks",
    title: "Thai Ice tea sweetened with cream and Boba pearl",
    description: "",
    price: 2.5
  }),
  new Product({
    category: "Drinks",
    title: "Thai Ice coffee",
    description: "",
    price: 2.5
  }),
  new Product({
    category: "Drinks",
    title: "Hot Jasmine Tea",
    description: "",
    price: 2.5
  }),
  new Product({
    category: "Drinks",
    title: "Hot Green Tea",
    description: "",
    price: 1.75
  }),
  new Product({
    category: "Drinks",
    title: "Fresh Brewed Iced Tea",
    description: "",
    price: 1.75
  }),
  new Product({
    category: "Drinks",
    title: "Hot Coffee",
    description: "",
    price: 1.75
  }),
  new Product({
    category: "Drinks",
    title: "Soda(Pepsi Products)",
    description: "",
    price: 3.0
  }),
  new Product({
    category: "Drinks",
    title: "Garlic & Pepper",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Drinks",
    title: "Soup",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Drinks",
    title: "Chicken & Cashew",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Pad Thai",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Soy Sauce Noodle",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Noodle Platter",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Paneang Curry",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Emerald Curry",
    description: "",
    price: 6.95
  }),
  new Product({
    category: "Lunch Specials",
    title: "Red Curry",
    description: "",
    price: 6.95
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      mongoose.disconnect();
    }
  });
}
