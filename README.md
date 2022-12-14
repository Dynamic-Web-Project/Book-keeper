## Short description of our project

The API used in this project is [Price Analytics](https://rapidapi.com/3b-data-3b-data-default/api/price-analytics).

Our deployed app on Firebase: https://bookkeeper-kth.web.app/login

What we decided to create was a live bookkeeping software website. The way users are able to store their bookkeeping records is by creating an account and logging in. This gives them the opportunity to edit their bookkeeping history, add and delete information including date, description, type and amount of income and expenses in real time.

Users can also search for price comparisons for the same type of item in different stores and observe information about the item, such as the item name, the store that owns the item, and the price of the item in different stores.

Users can use our price comparison analysis API to keep the information about the product they are interested in, such as the price and the name, in the interface, and then later, if the user buys the product, the product can be officially added to the P&L record.

## Bookkeeper introduction
![image](https://user-images.githubusercontent.com/42958783/207596387-de7b9311-1e64-4bf1-a4ac-89c83355481e.png)
![image](https://user-images.githubusercontent.com/42958783/207596432-be149616-9036-41e7-97a2-a71fdaec0013.png)
Signup and login (using Firebase).

![image](https://user-images.githubusercontent.com/42958783/207596846-8d2c3395-076c-4155-8854-01475d568051.png)
Home - shows income, expense and balance. User can fill in time, type, description, amount to record user's spendings (persistent). Deleting spending records by clicking on delete button on each row.

![image](https://user-images.githubusercontent.com/42958783/207597179-0694afaa-b3d5-4cf0-aba3-2e26011c1923.png)
Search - obtain a list of products by user search query by fetching from API. User can add specific product to their wish list to be able to access them at ease.

![image](https://user-images.githubusercontent.com/42958783/207597362-fa2a9bd1-1e61-40c1-b451-5471809f6396.png)
Wish - add desired product from search page to user's wish list (persistent). User can delete wish list products in the same way as in Home.

## How to setup
- Clone this repository
- Navigate to \book_app
- Use "**npm install**" to get all required packages
- Use "**npm run start**" to start server

(Note that you'll need your own API key for search functionality to work)

## Our project file structure 

We use the React structure, which means we can use a public folder to store our index files, css file. We store the main files in the source folder. In the app we use the React component to render each presenter part. Our project uses the MVP structure and stores it in source, which also contains app.js, index.js and the rest of the general files.
