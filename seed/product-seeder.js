var Product = require('../models/product');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OnlineOrder');

var products = [
    new Product({
        category: 'Appetizers',
        title: 'A1 Egg Rolls(Porpia Tod)',
        description: '4 Pcs',
        price: 5.95
    }),
    new Product({
        category: 'Appetizers',
        title: 'A1 Vegetarian Egg Rolls',
        description: '4 Pcs',
        price: 5.95
    }),
    new Product({
        category: 'Appetizers',
        title: 'A3 Crab Rangoon',
        description: '4 Pcs',
        price: 4.95
    }),
    new Product({
        category: 'Appetizers',
        title: 'A4 Thai Wings',
        description: '5 Pcs',
        price: 5.95
    }),
    new Product({
        category: 'Appetizers',
        title: 'A5 Cheese Stick With Suki Sauce',
        description: '2 pcs',
        price: 4.95
    }),
    new Product({
        category: 'Salads',
        title: 'B1 Thai Green Salad(salad puk)',
        description: 'Fresh mix salad, carrot, cucumber, red onion, tomato, Serve with thai peanut dressing.',
        price: 4.95
    }),
    new Product({
        category: 'Salads',
        title: 'B2 Spicy Shrimp or Seafood Salad',
        description: 'Shrimp or sea food with onion asian celery, toamto, peanut, lime juice, fresh thai chilli, fresh garlic, topped with fried garlic, roasted chilli, green onions and cilantro',
        price: 10.95
    }),
    new Product({
        category: 'Salads',
        title: 'B3 Bean Noodle spicy Salad',
        description: 'Bean Noodles mixed with minced chicken, shrimp, onions, peanuts, Asian celery, tomato, lime juice, fresh chilli and fresh garlic. Topped with fried garlic, roasted chilli, green onions and cilantro',
        price: 8.95
    }),
    new Product({
        category: 'Curries',
        title: 'C1 Mussaman Curry',
        description: 'Mussaman Curry paste cook with choice of meat in coconut milk, peanuts, potato, onion and topped with dry chilli',
        price: 9.95
    }),
    new Product({
        category: 'Curries',
        title: 'C2 Panaeng Curry',
        description: 'Panaeng Curry paste cook with choice of meat in coconut milk, zucchini, bell pepper, onion, Thai basil and topped with dry chilli',
        price: 9.95
    }),
    new Product({
        category: 'Curries',
        title: 'C3 Emerald Curry',
        description: 'Emerald Curry paste cook with choice of meat in coconut milk, zucchini, bell pepper, onion, Thai basil and topped with dry chilli',
        price: 9.95
    }),
    new Product({
        category: 'Curries',
        title: 'C4 Yellow Curry',
        description: 'Emerald Curry paste cook with choice of meat in coconut milk, carrots, onion, potato and topped with dry chilli',
        price: 9.95
    }),
    new Product({
        category: 'Curries',
        title: 'C5 Red Curry',
        description: 'Stir-fried red Curry paste cook with choice of meat in coconut milk, tomato, bell pepper, onion, Thai basil, baby corn and fresh garlic',
        price: 9.95
    }),
    new Product({
        category: 'Fried Rice',
        title: 'F1 Chicken Fried Rice',
        description: 'Sliced chicken stir-fried with eggs, carrots, bell peppers and onions',
        price: 7.95
    }),
    new Product({
        category: 'Fried Rice',
        title: 'F2 Shrimp or Seafood Fried Rice',
        description: 'Shrimp or sea food stir-fried with eggs, carrots, bell peppers and onions',
        price: 9.95
    }),
    new Product({
        category: 'Fried Rice',
        title: 'F3 Vegetable Fried Rice',
        description: 'Stir-fried with eggs, carrots, bell peppers and onions',
        price: 7.95
    }),
    new Product({
        category: 'Fried Rice',
        title: 'F4 Curry Fried Rice',
        description: 'Choice of curry paste stir-fried with choice of meat in coconut milk and vegetables',
        price: 9.95
    }),
    new Product({
        category: 'Fried Rice',
        title: 'F5 Basil Fried Rice',
        description: 'Spicy chilli paste stir-fried with choice of meat, bell pepper, onion and thai basil',
        price: 7.95
    }),

    new Product({
        category: 'Fried Rice',
        title: 'F6 Tom Yum Fried Rice',
        description: 'Spicy tom yum paste stir-fried with choice of meat, mushroom, onion, Asian celery and tomato',
        price: 7.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L1 Garlic & Pepper',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L2 Sweet & Sour Pork, Chicken or Vegetables',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L3 Chicken & Cashew',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L4 Pad Thai',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L5 Soy Sauce Noodle',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L6 Noodle Platter',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L7 Paneang Curry',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L8 Emerald Curry',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L9 Red Curry',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M1 Sea Food Chilli Oil',
        description: 'SeaFood stir fried with chilli oil, onion, thai basil, bell pepper and thai seasoning ',
        price: 10.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M2 Sea Food Pad Cha',
        description: 'Stir fried sea food with fresh chilli, fresh garlic, bell pepper, onion and Asian Celery',
        price: 10.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M3 Combo Spicy Sauce',
        description: 'Choice of meat and sea food stir fried with red curry paste, tomato, onnion and Thai basil.',
        price: 12.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M4 Garlic & Pepper',
        description: 'Garlic pepper sauce stir-fried with choice of meat',
        price: 9.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M5 Sweet & Sour',
        description: 'Sweet and Sour sauce stir-fried with onion, tomato, bell pepper and pineapple',
        price: 8.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M6 Sweet and Sour Vegetables',
        description: 'Sweet and Sour sauce stir-fried with onion, tomato, bell pepper, pineapple, zucchini, baby corn and cucumber',
        price: 7.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M7 Chicken & Cashew',
        description: 'Chicken sauteed with cashew nut, onion, pineapple, bell pepper and dry chilli',
        price: 8.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M8 Laab',
        description: 'Minced chicken cooked with roasted chilli, roasted rice, fresh garlic, fresh chilli, onion, green onion, cilantro and lemon grass',
        price: 8.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M9 Beef with oyster Sauce',
        description: 'Stir-fried beef with oyster sauce, carrot, zucchini, onion and garlic oil',
        price: 9.95
    }),

    new Product({
        category: 'Main Course(served with rice)',
        title: 'M10 Khao Na Gai',
        description: 'Chicken stir-fried with sweet and sour sauce, garlic oil, mushroom, onions and carrots',
        price: 8.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M11 Pad Kra Phow',
        description: 'Choice of meat stir-fried with fresh chilli, fresh garlic, onion, bell pepper and thai basil',
        price: 8.95
    }),
    new Product({
        category: 'Main Course(served with rice)',
        title: 'M12 Mix Vegeyables',
        description: 'Stir-fried Napa cabbage, carrot, bell pepper, baby corn, onion, zucchini, mushroom, fresh garlic and dark sauce',
        price: 7.95
    }),

    new Product({
        category: 'Main Course(served with rice)',
        title: 'M13 Rad Na Stir-Fry',
        description: 'Choice of meat stir-fried with garlic oil, mushroom, carrot, tomato, onion, asian celery, in dark sauce topped with white pepper',
        price: 8.95
    }),
    new Product({
        category: 'Stir-Fried Noodles',
        title: 'N1 Pad Thai',
        description: 'Rice noodles or bean noodles stir-fried with choice of meat, Thai sauce, egg, bean sprouts, ground peanuts and green onions',
        price: 8.50
    }),
    new Product({
        category: 'Stir-Fried Noodles',
        title: 'N2 Soy Sauce Noodle',
        description: 'Wide rice noodles stir-fried with choice of meat, egg, Chinese broccoli, broccoli and carrots',
        price: 8.95
    }),
    new Product({
        category: 'Stir-Fried Noodles',
        title: 'N3 Bassil Leaves Noodle',
        description: 'Choice of meat stir-fried with wide rice noodles, fresh chilli, fresh garlic, onion, bell pepper, tomato, baby corn and Thai basil',
        price: 8.95
    }),
    new Product({
        category: 'Stir-Fried Noodles',
        title: 'N4 Noodle Platter',
        description: 'Sauteed wide rice noodles topped with cabbage and carrots in choice of meat',
        price: 8.95
    }),

    new Product({
        category: 'Stir-Fried Noodles',
        title: 'N5 Pad Woonsen',
        description: 'Bean noodles stir-fried with choice of meat garlic oil, tomato, cabbage, onion and carrots',
        price: 8.95
    }),
    new Product({
        category: 'Stir-Fried Noodles',
        title: 'N6 Pad Mee Korat',
        description: 'Choice of meat cooked with thin rice noodle stir-fried with Thai sauce, garlic oil, chilli oil, bean sprouts and green onions',
        price: 8.95
    }),
    new Product({
        category: 'Stir-Fried Noodles',
        title: 'N7 Emerald Nam Ya',
        description: 'Thin rice noodle cooked in coconut milk, minced chicken, green curry paste, served with bean sprouts, green onions, Thai basil and pickled cabbage.',
        price: 8.95
    }),
    new Product({
        category: 'Stir-Fried Noodles',
        title: 'N8 Thai Hot Suki',
        description: 'Choice of meat cooked in suki sauce cooked with bean noodles, Napa Cabbage, Asian celery, carrots, onions, egg and garlic oil',
        price: 9.95
    }),
    new Product({
        category: 'Stir-Fried Noodles',
        title: 'N9 Pretee Noodle',
        description: 'Choice of meat stir-fried with canton noodles, Napa Cabbage, cabbage, carrots, onions, egg and green onion',
        price: 8.95
    }),
    new Product({
        category: 'Soups',
        title: 'S1 Thai Wonton Soup',
        description: 'Minced pork in wonton wrapper, carrots, green onion, cilantro, garlic oil, egg and white pepper',
        price: 5.95
    }),
    new Product({
        category: 'Soups',
        title: 'S2 Pho Noodle Soup',
        description: 'Rice noodle soup in chicken broth with choice of meat, bok choy, garlic oil, carrots, green onions, sliced onion, cilantro, ground peanuts and white pepper.',
        price: 7.95
    }),
    new Product({
        category: 'Soups',
        title: 'S3 Xongs Pho Noodle Soup',
        description: 'Rice noodle soup in beef broth with choice of meat, bok choy, garlic oil, carrots, green onions, sliced onion, cilantro, ground peanuts, white pepper, chilli oil and Thai basil.',
        price: 7.95
    }),
    new Product({
        category: 'Soups',
        title: 'S4 Noodle Tom Yom',
        description: 'Rice noodle soup or bean noodle soup cooked in choice of meat in Tom Yom paste and milk, bean sprout,  garlic oil, green onions, sliced onion, cilantro and white pepper.',
        price: 8.95
    }),
    new Product({
        category: 'Soups',
        title: 'S5 Hot & Sour Soup(served with rice)',
        description: 'Choice of meat cooked in Tom Yom paste and milk,  garlic oil, green onions, asian celery, sliced onion and cilantro.',
        price: 9.95
    }),
    new Product({
        category: 'Soups',
        title: 'S6 Chicken Coconut Milk Soup(served with rice)',
        description: 'Chicken cooked in cocnut milk, mushroom, tomato, onion, Asian celery, galangal, green onion and cilantro',
        price: 8.95
    }),
    new Product({
        category: 'Soups',
        title: 'S7 Rice Soup',
        description: 'Jasmine rice cooked withminced pork or chicken, egg, garlic oil, Asian celery, green onion, cilantro and white pepper.',
        price: 5.95
    }),
    new Product({
        category: 'Kids Menu',
        title: 'K1 Corn Dog',
        description: 'Served with french fries',
        price: 3.95
    }),
    new Product({
        category: 'Kids Menu',
        title: 'K2 Chicken Strips',
        description: 'Served with choice of French fries or Steamed vegetables',
        price: 4.50
    }),
    new Product({
        category: 'Kids Menu',
        title: 'K3 Chicken Fried Rice',
        description: '',
        price: 5.95
    }),
    new Product({
        category: 'Kids Menu',
        title: 'K4 Soy Sauce Noodle With Chicken',
        description: '',
        price: 5.95
    }),
    new Product({
        category: 'Sides',
        title: 'White Rice',
        description: '',
        price: 1.95
    }),
    new Product({
        category: 'Sides',
        title: 'Fried Rice',
        description: '',
        price: 2.95
    }),
    new Product({
        category: 'Sides',
        title: 'Noodles',
        description: '',
        price: 2.95
    }),
    new Product({
        category: 'Desserts',
        title: 'Asian Donuts with Thai Custard',
        description: '',
        price: 4.95
    }),
    new Product({
        category: 'Desserts',
        title: 'Mango with Sweet Sticky Rice',
        description: 'Fresh mango served with steamed sticky rice, sweetened with coconut syrup.',
        price: 5.95
    }),
    new Product({
        category: 'Drinks',
        title: 'Fresh young coconut juice',
        description: '',
        price: 1.95
    }),
    new Product({
        category: 'Drinks',
        title: 'Thai Ice tea sweetened with cream and Boba pearl',
        description: '',
        price: 2.50
    }),
    new Product({
        category: 'Drinks',
        title: 'Thai Ice coffee',
        description: '',
        price: 2.50
    }),
    new Product({
        category: 'Drinks',
        title: 'Hot Jasmine Tea',
        description: '',
        price: 2.50
    }),
    new Product({
        category: 'Drinks',
        title: 'Hot Green Tea',
        description: '',
        price: 1.75
    }),
    new Product({
        category: 'Drinks',
        title: 'Fresh Brewed Iced Tea',
        description: '',
        price: 1.75
    }),
    new Product({
        category: 'Drinks',
        title: 'Hot Coffee',
        description: '',
        price: 1.75
    }),
    new Product({
        category: 'Drinks',
        title: 'Soda(Pepsi Products)',
        description: 'Flavor:Strawberry, Mango, Taro, Honey Dew, Mango-Strawberry',
        price: 3.00
    }),
    new Product({
        category: 'Drinks',
        title: 'L1 Garlic & Pepper',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Drinks',
        title: 'L2 Sweet & Sour Pork, Chicken or Vegetables',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Drinks',
        title: 'L3 Chicken & Cashew',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L4 Pad Thai',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L5 Soy Sauce Noodle',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L6 Noodle Platter',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L7 Paneang Curry',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L8 Emerald Curry',
        description: '',
        price: 6.95
    }),
    new Product({
        category: 'Lunch Specials',
        title: 'L9 Red Curry',
        description: '',
        price: 6.95
    }),



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