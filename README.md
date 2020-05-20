# restaurant
## User must register to make online order, book a table
fields: name, phone, email, delivery address

## Only  users with delivery address can choose delivery option 
## User must choose at least one meal for the menu option to place an order
## User is able to book a table (Bookings)
fields: number of people, date/time
## User can pay online using credit card
## User can have an estimated delivery time
## Restaurant menu (Menu)
fields: mealName, price, ingredients, picture
## Order (Order)
fields: userID, totalOrder
## OrderItem (OrdemItem)
fields: mealID, orderID, quantity, totalPrice
