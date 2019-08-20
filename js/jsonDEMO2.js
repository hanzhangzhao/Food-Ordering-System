var jsonDEMO2 = [
    {
        "category": [  // Drinks -  Pop, Coffee, Beer, Juice
/* (0, 0) */{"item":"Coke", "description":"A regular Coke.", "price":"$2.25", "image":"assets/images/coke.jpg"},  // Pop
/* (0, 1) */{"item":"Sprite", "description":"A regular Sprite.", "price":"$2.25", "image":"assets/images/sprite.jpg"},  // Pop
/* (0, 2) */{"item":"Iced tea", "description":"A regular iced tea.", "price":"$2.25", "image":"assets/images/icedtea.jpg"},  // Pop
/* (0, 3) */{"item":"Cappucino", "description":"A beverage made with a shot of espresso and equal parts steamed and foamed milk.", "price":"$4.25", "image":"assets/images/cappucino.jpeg"},  // Coffee
/* (0, 4) */{"item":"Cafe Latte", "description":"A shot of espresso, with a healthy covering of hot steamed milk and up to a quarter inch of foamed milk on top.", "price":"$4.75", "image":"assets/images/cafelatte.jpg"},  // Coffee
/* (0, 5) */{"item":"Bud Light", "description":"A regular Bud Light.", "price":"$4.25", "image":"assets/images/budlight.png"},  // Beer
/* (0, 6) */{"item":"Budweiser", "description":"A regular Budweiser.", "price":"$4.00", "image":"assets/images/budweiser.jpeg"},  // Beer
/* (0, 7) */{"item":"Orange Juice", "description":"A regular orange juice.", "price":"$2.00", "image":"assets/images/orangejuice.jpg"},  // Juice
/* (0, 8) */{"item":"Lemonade", "description":"A regular lemonade.", "price":"$2.00", "image":"assets/images/lemonade.jpg"}  // Juice
        ]
    },
    {
        "category": [  // Appetizers - Soup, Salad, Fruits
/* (1, 0) */{"item":"Chicken & Wild Rice Soup", "description":"Long grain and wild rice, celery, onions, carrots and diced chicken simmered in chicken broth.", "price":"$6.25", "image":"assets/images/chickensoup.jpg"},  // Soup
/* (1, 1) */{"item":"Bread Cheddar Soup", "description":"Chopped bread shredded carrots and select seasonings simmered in a velvety smooth cheese sauce.", "price":"$5.75", "image":"assets/images/breadcheddar.jpg"},  // Soup
/* (1, 2) */{"item":"Vegetarian Creamy Tomato Soup", "description":"Vine-ripened pear tomatoes pureed with fresh cream for a velvety smooth flavor accented by hints of red pepper.", "price":"$5.75", "image":"assets/images/vegetarian.jpg"},  // Soup
/* (1, 3) */{"item":"Oriental Chicken Salad", "description":"Fresh Asian greens tossed in a tasty Oriental vinigarette and topped with crispy noodles, toasted almonds and golden fried chicken.", "price":"$10.25", "image":"assets/images/oriental.jpg"},  // Salad
/* (1, 4) */{"item":"Grilled Chicken Caesar Salad", "description":"Juicy grilled chicken breast over crisp romaine tossed in our garlic Caesar dressing. Topped with challah croutons and our Parmesan cheese blend.", "price":"$6.50", "image":"assets/images/grilled.jpg"},  // Salad
/* (1, 5) */{"item":"Mango Bruschetta", "description":"This bruschetta is made with mango, basil, and Romano cheese, which yields an interesting combination of sweet, sour, and peppery flavors.", "price":"$7.25", "image":"assets/images/mango.jpg"},  // Fruits
/* (1, 6) */{"item":"Bacon-Wrapped Pineapple Bites", "description":"Sweet, salty and savory flavors perfectly complement each other when marinated pineapple chunks are wrapped with bacon", "price":"$7.25", "image":"assets/images/bacon.jpg"},  // Fruits
        ]
    },
    {
        "category": [  // Entrées - Steak, Seafood, Burger
/* (2, 0) */{"item":"Asian Flat Iron Steak", "description":"Flat iron steak marinated in a soy sauce-based marinade with green onions and garlic.", "sides":["None", "Mashed Potatoes", "Roasted Potatoes", "Glazed Carrots"], "price":"$25.25", "extras":["Rare", "Medium rare", "Medium", "Medium well", "Well"], "image":"assets/images/asian.jpg"}, // Steak
/* (2, 1) */{"item":"Smothered Filet Mignon", "description":"Filet Mignon The fillet mignon marinates in a mixture of balsamic vinegar and Dijon mustard.", "sides":["None", "Mashed Potatoes", "Roasted Potatoes", "Glazed Carrots"], "price":"$22.25", "extras":["Rare", "Medium rare", "Medium", "Medium well", "Well"], "image":"assets/images/filet.jpg"}, // Steak
/* (2, 2) */{"item":"Snow Crab Legs", "description":"Ssteamed wild-caught snow crab legs and serve them with your choice of a side.", "sides":["None", "Roasted Asparagus", "Roasted Corn Kabob"], "price":"$24.50", "extras":["Crab Legs"], "image":"assets/images/snowcrab.jpg"}, // Seafood
/* (2, 3) */{"item":"Garlic-Grilled Shrimp", "description":"A skewer of shrimp brushed with a buttery garlic glaze for extra flavor.", "sides":["None", "Roasted Asparagus", "Roasted Corn Kabob"], "price":"$19.00" , "extras":["Shrimp"], "image":"assets/images/garlicshrimp.jpg"}, // Seafood
/* (2, 4) */{"item":"Shirmp Linguini Alfredo", "description":"Tender shrimp in our famous creamy garlic Parmesan sauce, served over linguini.", "sides":["None", "Roasted Asparagus", "Roasted Corn Kabob"], "price":"$19.00", "extras":["Shrimp"], "image":"assets/images/linguini.jpg"}, // Seafood
/* (2, 5) */{"item":"Rock Lobster Tail", "description":"Wild-caught Caribbean lobster wood-grilled to perfection.", "sides":["None", "Roasted Asparagus", "Roasted Corn Kabob"], "price":"$30.25", "image":"assets/images/lobster.jpg"}, // Seafood
/* (2, 6) */{"item":"Gyros Burger", "description":"This is a Greek/American lamb and beef mixture version of the traditional Greek pork or lamb Gyros (or Gyro). Serve on warm pita bread with tzatziki sauce, and thinly sliced onion, tomato and lettuce.", "sides":["None", "Fries", "Roasted Sweet Potatoes", "Coleslaw"], "price":"$21.25", "extras":["Tomato", "Lettuce", "Pickles"], "image":"assets/images/gyros.jpg"}, // Burger
/* (2, 7) */{"item":"Chorizo Burger", "description":"An extremely flavorful Spanish style burger made from beef and Spanish chorizo sausage, topped with caramelized onions and smoky red pepper ranch sauce and shavings of Manchego cheese served in sweet brioche buns.", "sides":["None", "Fries", "Roasted Sweet Potatoes", "Coleslaw"], "price":"$19.25", "extras":["Tomato", "Lettuce", "Pickles"], "image":"assets/images/chorizo.jpg"}, // Burger 
        ]
    },
    {
        "category": [  // Desserts - Pies, Cake, Frozen Desserts
/* (3, 0) */{"item":"Autumn Apple and Pear Lattice Pie", "description":"Golden pears and apples pair with cinnamon and a buttery crust for the ultimate autumn dessert.", "price":"$7.25", "image":"assets/images/autumn.jpg"}, // Pies
/* (3, 1) */{"item":"Rustic Fall Fruit Tart", "description":"This rustic tart is full of apples, fresh cranberries, walnuts, and spices, and is baked in a cream cheese pastry.", "price":"$7.50", "image":"assets/images/rustic.jpg"}, // Pies
/* (3, 2) */{"item":"Citrus Cheesecake", "description":"A great tasting citrus cheesecake with a marmalade glaze. Garnish with orange slices and sprigs of mint.", "price":"$7.50", "image":"assets/images/citrus.jpg"}, // Cake
/* (3, 3) */{"item":"Extreme Chocolate Cake", "description":"A rich moist chocolate cake with a chocolate buttercream icing.", "price":"$10.50", "image":"assets/images/extreme.jpg"}, // Cake
/* (3, 4) */{"item":"Fruited Ice Cream", "description":"This ice cream is made with sweetened condensed milk, cream, and strawberries.", "price":"$6.00", "image":"assets/images/fruited.jpg"}, // Frozen Desserts
/* (3, 5) */{"item":"Hot Fudge Ice Cream Bar Dessert", "description":"A layered frozen dessert of ice cream sandwiches, whipped topping, peanuts and peanut butter-chocolate sauce.", "price":"$6.00", "image":"assets/images/fudge.jpg"}, // Frozen Desserts
            

        ]
    }
]