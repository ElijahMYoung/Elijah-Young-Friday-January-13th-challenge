# Friday Challenge - Friday 13, 2023

## Explanation

There were several things I had to differently to make the server using TypeScript than using JavaScript. I had to install specific node modules such as ts-node to have node recognize typescript. The images folder just contains any images used in this readme markdown file. The source folder holds the [server.ts](source/server.ts) file along with the [config](source/config), [controllers](source/controllers) and [routes](source/routes) folders. These are relativaley self explanitory, but something of note in the config folder is [logging.ts](source/config/logging.ts), which was extremely helpful for helping me troubleshoot errors I had when trying to start the server and also shows exactly what is fetched and when in the console. The [controllers](source/controllers/customer.ts) folder holds all of the crud operations, and the [routes](source/routes/customer.ts) golds the /get and /create routes used.

### For this challenge, I tested the database connection using the customers table.

### The code was tested using postman. The route I used to test was http://localhost:1337/customers/get/customers which correctly dispalayed the customer data as seen in the image below.

![Alt text](images/Screen%20Shot%202023-01-13%20at%2011.39.40%20AM.png)
