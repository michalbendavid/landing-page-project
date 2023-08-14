/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
//let products = [ cherry ,orange , strawberry];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let products = [
    { name: "Carton of Cherries",
      price: 4,
      quantity: 0,
      productId:100,
      image: "https://unsplash.com/photos/INprSEBbfG4" 
    },
    { name: "Bag of Oranges",
      price: 10,
      quantity: 0,
      productId:101,
      image:  "https://unsplash.com/photos/U1iYwZ8Dx7k"
    },
    { name: "Carton of Strawberries",
      price: 5,
      quantity: 0,
      productId: 102,
      image:  "https://unsplash.com/photos/xnRg3xDcNnE"
    }
   ]
   /* Images provided in /images folder. All images from Unsplash.com
      - cherry.jpg by Mae Mu
      - orange.jpg by Mae Mu
      - strawberry.jpg by Allec Gomes
   */
   /* Declare an empty array named cart to hold the items in the cart */
   let cart = [];
   /* Create a function named addProductToCart that takes in the product productId as an argument
     - addProductToCart should get the correct product based on the productId
     - addProductToCart should then increase the product's quantity
     - if the product is not already in the cart, add it to the cart
   */
   for product of products
   
   function addProductToCart(productId) {
     if (productId === 100 && cart.indexOf("Carton of Cherries")<=0){
         cart = cart + "Carton of Cherries";
         products[0].quantity++
         if (productId === 100 && cart.indexOf("Carton of Cherries")>0){
            increaseQuantity(productId);
         } }
     else if (productId=== 101 && cart.indexOf("Bag of Oranges")<=0){
            cart = cart + "Bag of Oranges";
            if (productId === 101 && cart.indexOf("Bag of Oranges")>0){
               increaseQuantity(productId);
           } }  
     else if (productId === 102 && cart.indexOf("Carton of Strawberries")<=0){
             cart = cart + "Carton of Strawberries";
             if (productId === 102 && cart.indexOf("Carton of Strawberries")>0){
               increaseQuantity(productId);
           } } }
   /* Create a function named increaseQuantity that takes in the productId as an argument
     - increaseQuantity should get the correct product based on the productId
     - increaseQuantity should then increase the product's quantity
   */
   function increaseQuantity(productId)
   
   /* Create a function named decreaseQuantity that takes in the productId as an argument
     - decreaseQuantity should get the correct product based on the productId
     - decreaseQuantity should decrease the quantity of the product
     - if the function decreases the quantity to 0, the product is removed from the cart
   */
   
   /* Create a function named removeProductFromCart that takes in the productId as an argument
     - removeProductFromCart should get the correct product based on the productId
     - removeProductFromCart should update the product quantity to 0
     - removeProductFromCart should remove the product from the cart
   */
   
   /* Create a function named cartTotal that has no parameters
     - cartTotal should iterate through the cart to get the total of all products
     - cartTotal should return the sum of the products in the cart
   */
   
   /* Create a function called emptyCart that empties the products from the cart */
   
   /* Create a function named pay that takes in an amount as an argument
     - pay will return a negative number if there is a remaining balance
     - pay will return a positive number if money should be returned to customer
   */
   
   /* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
   
   
   /* The following is for running unit tests. 
      To fully complete this project, it is expected that all tests pass.
      Run the following command in terminal to run tests
      npm run test
   */
   
   module.exports = {
      products,
      cart,
      addProductToCart,
      increaseQuantity,
      decreaseQuantity,
      removeProductFromCart,
      cartTotal,
      pay, 
      emptyCart,
      /* Uncomment the following line if completing the currency converter bonus */
      // currency
   }
   function newFunction() {
     return "https://unsplash.com/photos/INprSEBbfG4"
   }
   
   