# E-Commerce Backend
Object-Relational Mapping (ORM):  E-Commerce Backend

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

This project focuses on Object Relational Mapping using the NPM Sequelize package. It will modify and configure a working Express.js API to use Sequelize to interact with a MySQL database.

**User Story**

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)

## Installation

- Clone the repository
- Run `npm install` to install dependencies
- Run `npm run seed` to see the database with sample data
- Run `npm start` to run the application.

## Usage

-  Use Insomnia or another web-testing tool capable of submitting GET, POST, PUT and DELETE requests.
- To get existing records, submit a GET request to any of the following URL paths:
    - `/api/categories`
    - `/api/products`
    - `/api/tabs`
- To get a specific record from any table, add the record ID on the end of the URL path:
    - `/api/categories/1`
    - `/api/products/2`
    - `/api/tabs/3`
- To add records, format the entries in Insomnia as JSON requests and submit as a POST request.  For example, to add a record to Products, use the following format:

    ```
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }

- To add new records to the Categories and Tags, it is only necessary to submit `category_name` and `tag_name` in the respective JSON-formatted POST requests.
- To update a record in any table, specify the appropriate record ID in the URL path (/api/categories/1), and submit a PUT request with JSON-formatted data.
    - Products records can have any of the above values in the 'add' example changed
    - Categories and Tags may have their `category_name` and `tag_name` fields changed.
- To delete a record, submit a DELETE request with the record ID in the URL path (/api/categories/1).

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Features

- Select all records, or specific records by ID from Product, Category, and Tags tables.
- Add new records, update, and delete records from the same tables.  NOTE:  When deleting a product, if that product is tied to a Category record, then you will not be able to delete the Product.  This behavior is by design.

## How to Contribute

Please submit a new Issue request.

