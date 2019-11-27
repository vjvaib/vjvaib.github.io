[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Pharmacy Store

Make a product inventory manager with full CRUD using Mongoose.

#### Learning Objectives

- Full CRUD app in Express with Mongoose

#### Prerequisites

- JavaScript 
- Express / Node 
- Mongo / Mongoose 

---

## Expected Functionality (MVP)

### Index Page 

1. Your app should have an index page where
	- all the products are displayed
	- the images link to the product's show page
	- and there should be a link to add a new product.

<details><summary><strong>Example</strong></summary>
<img src="https://i.imgur.com/CRJd6Hg.png">
</details>

### Show Page 

1. Your show page should display a product with
	- a link back to the products
	- a link to edit the product (goes to the edit page)
	- a delete button that deletes
	- and the number of items remaining in stock.
	
2. There should be a BUY button. The BUY button will reduce the number of items in stock by 1 each time it's pressed.

<details><summary><strong>Example</strong></summary>
<img src="https://i.imgur.com/sp9DGtd.png">
</details>

3. If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. (Hint: conditionals in ejs).

4. On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.

5. The BUY button should also **not** be rendered if the quantity of the item is zero.

<details><summary><strong>Example</strong></summary>
<img src="https://i.imgur.com/5FZKyly.png">
</details>

### Edit & New Page

1. These views should render forms and submit to the appropriate routes.

### Redirects 

1. The create route should redirect to the index

1. The delete route should redirect to the index

1. The update route will redirect back to the product's show page.

1. For the Hungry for more? the BUY button will go to a route that redirects back to the product's show page

---

## Getting Started

1. Inside the `Pharmacy_store` folder, set up Express with MVC architecture with the appropriate folders for models, views, and controllers.

1. You will need the seven RESTful routes. You can begin with your data-layer and test that everything works with cURL or Postman. Don't worry about what the BUY button does or where it goes just yet. Just set up your regular RESTful stuff.

1. You will need to make a Mongoose Schema in a products.js file for your products. The schema should have:

	```js
	  name: String,
	  description: String,
	  img: String,
	  price: Number,
	  qty: Number
	```
1. Set up validations for the price and qty (can't be less than zero) and make the name a required field.

1. Create a model and export it.

1. Make sure you connect to your Mongo server in `server.js`

1. Make sure your controller can access your model:

	`const Product = require('./models/products');`

1. _NOTE:_ For testing purposes, especially for having quick access to those wacky Mongo ids, maybe think about having a route /json that res.sends an index of all the data in json format so that you can copy/paste ids into your url bar or cURL or what-have-you.

## The Buy Button 

After you have your full CRUD app working, it's time to break/extend RESTful conventions according to your own lights. The app needs a buy button. It's up to you to make your own routes to facilitate it.

As mentioned in the expected functionality, if a product is in stock (the qty is above 0), the show page should have a BUY button. If the product is out of stock, it should not have this button.

When the BUY button is pressed, it will make a request to update the qty of the product (decrease it by 1).










---




---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
