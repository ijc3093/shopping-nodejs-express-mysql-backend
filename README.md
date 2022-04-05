# shopping-nodejs-express-mysql-backend
Using Postman to get Nodejs to retrieve all data from the database in PRODUCT-AZURE-PDO running in (xampp). For frondend, please click this link: "https://github.com/ijc3093/Shoppings-React_Axios-Typescript.git" in the


# Mysql
- Check employees.sql in database folder in backend folder.
- Open terminal on your macbook and type command: PATH=$PATH:/usr/local/mysql/bin and press "enter"
- Then type command: mysql -u root -p and press "enter"
- If it asked for your password for root, you should type your password and press "enter"
- Make sure that your password for username should be match from MYSQL server
- type command: source source /Users/github/Documents/GitHub/shopping-nodejs-express-mysql-backend/app/database/shopping.sql and press "enter"
- type command: show databases; and press "enter"
- Make sure that database name called shopping should be existed in database system.
- leaving the mysql running......


# Node (Backend) 
- Open another Visual Code studio (VSC)
- Select New Terminal in the Top Terminal Tab
- Type in the terminal: node server.js and press enter

# Postman screen
Displaying product

![Screenshot](https://github.com/ijc3093/Product-Azure-PDO/blob/master/Documents/Screen/login.PNG)

# Operational Model
-	Rules
-	There will have three roles (Admin, Manager and user) on Web Application
-	Provide Museai administrative with an account for admin, manager and user
-	Only the admin role should have the ability to view all the information, change information and upload/remove static information.
-	The manager should be able to view the information, edit and delete on own his/her page.
-	The user should be able to view and search the information.

# Security
-	Admin should be able to access all roles accounts for security reasons
-	Both manager and user should not be able to access admin accounts
-	We will maintain session security through the use of secure web tokens
-	The museai’s url should be blocked or forbid from accessing of the hacker
