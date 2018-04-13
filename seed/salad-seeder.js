var Salad = require('../models/salad');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OnlineOrder');

var salads = [
    new Salad({
        imagePath: 'basilfried.jpeg',
        title: 'B1 Thai Green Salad(salad puk)',
        description: 'Fresh mix salad, carrot, cucumber, red onion, tomato, Serve with thai peanut dressing.',
        price: 4.95
    }),
    new Salad({
        imagePath: 'public/images/basilfried.jpg',
        title: 'B2 Spicy Shrimp or Seafood Salad',
        description: 'Shrimp or sea food with onion asian celery, toamto, peanut, lime juice, fresh thai chilli, fresh garlic, topped with fried garlic, roasted chilli, green onions and cilantro',
        price: 10.95
    }),
    new Salad({
        imagePath: 'public/images/basilfried.jpg',
        title: 'B3 Bean Noodle spicy Salad',
        description: 'Bean Noodles mixed with minced chicken, shrimp, onions, peanuts, Asian celery, tomato, lime juice, fresh chilli and fresh garlic. Topped with fried garlic, roasted chilli, green onions and cilantro',
        price: 8.95
    }),

];


var done = 0;
for (var i = 0; i < salads.length; i++) {
    salads[i].save(function(err, result) {
        done++;
        if (done === salads.length) {
            mongoose.disconnect();
        }
    });
}