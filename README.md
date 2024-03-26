## Project Description
**[internet_based_lib_front](https://github.com/BartoszGry/internet_based_lib_front)** is the frontend layer of the library system project. This project constitutes a part of my bachelor's degree thesis. The main goal of the project was to create a library system that integrates with the National Library's API. Another aspect of the project was to design a system for logging in, registration, searching, and borrowing books.   

The frontend layer has been written in TypeScript using the Vue framework on the server. It utilizes the Bootstrap library for user interface design. The aim was to provide an interface for the backend system built in Java.

![View of the page](https://i.imgur.com/ljIkdOV.png)
## Project launch process
 
Navigate to Project Directory:
```bash
cd path/to/project
```
Install npm:
```bash
npm install
```
 Install React:
 ```bash
npm install react
```
 Install React Bootstrap:
 ```bash
npm install react-bootstrap bootstrap
```
 Install react-images-uploading:
 ```bash
npm install --save react-images-uploading
```
 Install Vite:
 ```bash
npm install vite
```
 Install Axios:
 ```bash
npm install axios
```
 Install React-Toastify:
 ```bash
npm install react-toastify
```
 Install qrcode.react:
 ```bash
npm install qrcode.react
```
Install React Cookie:
```bash
npm install react-cookie
```
 Launch Development Server:
 ```bash
npm run dev
```
## Functionalities

### Registration

**Function Name:** Registration

**Description:** This function checks if a user with the provided data exists in the system. If the user exists, it returns an error. If the user does not exist, it adds their data to the database along with the email address and encrypted password.

**Input Data:** First name, last name, email, password.

**Purpose:** Creating new users in the system.

### Login

**Function Name:** Login

**Description:** This function checks the user's login data against existing data in the database. If the login data matches, it returns a login confirmation along with a JWT token and UserDTO object. In case of mismatch, it displays an error.

**Input Data:** User email and password.

**Purpose:** Granting access to user data and service functions intended for the user.



### Search

**Function Name:** Search

**Description:** This function enables searching bibliographic records based on a selected category: author, title, publication year, type, or publisher, and the corresponding category of text to be searched within the bibliographic records.

**Input Data:** Search category and entered text.

**Purpose:** Allows the user to search for books or articles of interest.

### Borrowing Publication

**Function Name:** Borrowing Publication

**Description:** This function allows the user to borrow a publication provided they are logged in and have not already borrowed that publication. If the condition is met, it saves the borrowing information in the system. If the user is logged in and has already borrowed the publication, it displays a message indicating that the publication is already borrowed. If the user is not logged in, it displays a login option.

**Input Data:** Publication ID and user data.

**Purpose:** Allows the user to borrow books or articles of interest.

### Borrowing Publication via QR Code

**Function Name:** Borrowing Publication via QR Code

**Description:** This function allows a logged-in user to borrow a publication by presenting a generated QR code. The user can use this function by using a mobile phone.

**Input Data:** Publication ID and user data.

**Purpose:** This function is intended for users using mobile phones. It allows borrowing a publication by presenting a QR code to the reader.

### Displaying Borrowings

**Function Name:** Displaying Borrowings

**Description:** This function allows the user to display borrowed publications along with the borrowing deadline and expiration date.

**Input Data:** User ID.

**Purpose:** This function is intended to allow the user to check their borrowings and borrowing deadlines. It enables users to track which publications they currently have borrowed and when they are due to return them.

### Logout

**Function Name:** Logout

**Description:** This function allows the user to safely log out of the system, clearing all sessions and temporary data associated with the user.

**Input Data:** None

**Purpose:** This function aims to provide the user with the ability to securely leave the system, eliminating any active sessions and temporary data associated with their account.


## Additional Information:

**Author:**
Bartosz Grygierczyk

**Contact:**
bartoszgrygierczyk01@gmail.com

