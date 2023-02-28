const Meal = require("./meals.model")
const Orders = require("./orders.model")
const Restaurant = require("./restaurants.model")
const Review = require("./reviews.model")
const User = require("./users.model")

const initModel = () => {
    
    User.hasMany(Review)
    Review.belongsTo(User)

    
    User.hasMany(Orders)
    Orders.belongsTo(User)

    
    Restaurant.hasMany(Review)
    Review.belongsTo(Restaurant)

    Restaurant.hasMany(Meal)
    Meal.belongsTo(Restaurant)

   
    Meal.hasOne(Orders)
    Orders.belongsTo(Meal)
}

module.exports = initModel