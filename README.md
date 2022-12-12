## Short description of our project

The API used in this project is [Price Analytics](https://rapidapi.com/3b-data-3b-data-default/api/price-analytics).

What we decided to create was a live bookkeeping software website. The way users are able to store their bookkeeping records is by creating an account and logging in. This gives them the opportunity to edit their bookkeeping history, add and delete information including date, description, type and amount of income and expenses in real time.

Users can also search for price comparisons for the same type of item in different stores and observe information about the item, such as the item name, the store that owns the item, and the price of the item in different stores.

Users can use our price comparison analysis API to keep the information about the product they are interested in, such as the price and the name, in the interface, and then later, if the user buys the product, the product can be officially added to the P&L record.

## What we have done
1. Signup and login (using Firebase)
2. Showing income, expense and balance
3. Filling in time, type, description, amount to record user's spendings (persistent)
5. Deleting spending records
6. Obtain a list of products by user search query by fetching from API
7. Add desired product to user's wish list (persistent)
8. Deleting wish list products

## Known issues
- Clicking a link from the API search result does not return to the same page when you go back

## Our project file structure 

We use the react structure, which means we can use a public folder to store our index files, css file. We store the main files in the source folder. In the app we use the react component to render each presenter part. Our project uses the MVP structure and stores it in source, which also contains app.js, index.js and the rest of the general files.
