var pizza = {
    crust: "thin",
    cheese: "mozzarella",
    sauce: "traditional red",
    addToppings: function() {
        console.log("Please add pepperoni and sausage")
    }
};

pizza.addToppings();

// console.log(function());

function orderPizza() {
    console.log(pizza.crust);
    console.log(pizza.cheese);
    console.log(pizza.sauce);
    console.log(pizza.addToppings)
}

console.log(orderPizza());