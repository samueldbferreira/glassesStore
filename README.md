# glassesStore

# Project Report

Bruna Azevedo Garcia 		N° USP:  11381789

Samuel de Assunção Ferreira	Nº USP: 12543565

Gabriel dos Santos Brito        Nº USP: 10284250


## how to run the code:

"npm install" to install

"npm mock" to start json server

"npm dev" to run the react app script

## Requirements

* The system have 2 types of users: Clients and Administrators;

* The admin record includes: id, first name, last name, phone and email;

* The administrator is responsible for registering and managing the products provided. The application already comes with an account admin with password admin;

* The administrator can manage customers;

* The administrator can manage its own information;

* The administrator can search customers by their id or name;

* The administrator can search products by their id, name or filtering information;

* Customers are users who access the system to buy products.
Each customer record includes: id, first name, last name, phone, address, email and password.

* The customer address record includes name, zip code, street, number, complement, district, state, city and reference point.

* Customers need to login before purchasing a product.

* The administrator an the customer can recover their password;

* The administrator email and the customer email need to be verified when added or modified;

* The administrator password and the customer password need to be reinsert before being changed;

* Each product record includes: id, name, photo, type, description, price, quantity in stock and quantity sold.

* The store sells glasses.




## Project Description

* This project involves creating an online store that sells a variety of glasses. The website will have a simple and user-friendly interface, secure payment options, and reliable shipping methods. The store will feature a comprehensive product catalog with detailed descriptions and high-quality images. The goal is to provide customers with a hassle-free shopping experience and increase sales through targeted marketing techniques and promotions.

* Selling Glasses: Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.

* Recovering password: When logging in, the user may select the “recover password” option. the user must then type their email address, in which they will receive the password redefinition email.

* Changing email:User must be logged in, then must navigate to the account details screen, then select the “change email address” option. A new email address is prompted (any email is accepted.

* Changing password:User must be logged in, then must navigate to the account details screen, then select the “change password” option. The user must first type their old password before typing their new one.

* Managing addresses: User must be logged in, then must navigate to the account details screen, then select the “Manage addresses” option. There, the user can manage the list of addresses the site may ship their products to.

* Creating a account:On the login screen, the user must select the “create account” option. The site will prompt for their email address, account name and  password. When this info is set, and the “create account” button is clicked, the site registers the account (it probably won’t register the account on a proper database as we guess this is beyond the scope of the project).

* Creating a product: When a admin is logged in they can register a new product by choosing the “new product” option, then entering the product information, along with the product image. The site will create a new entry for the product and it will show up in the product browse screen

* Managing a product: When a admin is logged in and chooses a product, instead of going to the purchase screen, they are presented with the “manage product” screen, which lets them edit the information and picture initially provided.




## Mockup
https://www.figma.com/file/34UUtssIUTS8EVjNKBXPKz/mockup?type=design&t=xeenbYgZbPp7wCJR-1




## Navigation diagram
https://miro.com/app/board/uXjVMLKnbQs=/?share_link_id=761055462924




## Comments About the Code
N/A




## Test Plan
It was not a functional delivery that allows navigating between pages, so it is not possible to perform any testing yet.




## Test Results
It was not a functional delivery that allows navigating between pages, so it is not possible to perform any testing yet.




## Build Procedures
Open the HTML files, including the files in the 'OculosDeSol' folder. 'OculosDeSol' is inside the 'HTMLs' folfer.
Build Procedures
Open the HTML files, including the files in the 'OculosDeSol' folder. 'OculosDeSol' is inside the 'HTMLs' folfer.

Problems: List any major problems you had.
Using Figma for creating HTML5 files was challenging as it may not be the most suitable tool for this purpose. However, it was still useful in establishing a project foundation and served its intended purpose well.

## Comments
N/A
