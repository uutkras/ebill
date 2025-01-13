# Electricity Bill Management Application

## Overview

This document outlines the design and functionality of an electricity bill management application. This application will provide a platform for users to manage their electricity bills efficiently and for administrators to oversee and manage customer accounts and billing information.

## Pages

### 1. Customer Registration Page
**Description:** This page allows new customers to register for the electricity bill management service.

**Fields:**

**Consumer Details:**
*   **Customer Number:** 13-digit number (real-time validation)
*   **Bill Number:** Automatically generated from the last 5 digits of the Customer Number

**User Details:**
*   **Title:** Dropdown list (Mr, Ms, Other)
*   **Name:** Full name (validations)
*   **Email ID:** Proper email format validations
*   **Mobile Number:** Country code dropdown + mobile number validations

**Login Details:**
*   **UserID:** Appropriate validations
*   **Password:** Secure password requirements
*   **Confirm Password:** Must match Password

**Buttons:**
*   **Reset**
*   **Register**

**Link:**
*   If already registered, Login here (link/button)

**Validation:**
*   All fields are mandatory.
*   Real-time validation for Customer Number.
*   Email format validation for Email ID.
*   Mobile number validation with country code.
*   Strong password validation for Password.
*   Password and Confirm Password must match.

**Success:**
*   Redirect to Acknowledgement of Registration page.

**Error Handling:**
*   Display clear and user-friendly error messages for invalid input.

### 2. Admin Registration Page

**Description:** This page is for new administrators to register and gain access to the application's administrative functions.

**Fields:**

**Admin Details:**
*   **Employee ID:** Unique identifier for the admin
*   **Name:** Full name (validations)
*   **Email ID:** Proper email format validations
*   **Mobile Number:** Country code dropdown + mobile number validations

**Login details:**
*   **Admin ID:** Appropriate validations
*   **Password:** Secure password requirements
*   **Confirm Password:** Must match Password

**Buttons:**
*   **Reset**
*   **Register**

**Link:**
*   If already registered, Login here (link/button)

### 3. Acknowledgement of Registration Page

**Description:** This page confirms successful registration for both customers and admins. It displays the user's registered details.

**Content:**

*   **Greeting:** "Hello $Name, your registration is successful!"
*   **Name:**
*   **Mobile Number:**
*   **Email ID:**
*   **User ID/Admin ID:**
*   **Customer Number:** (for customer registration)
*   **Employee ID:** (for admin registration)

**Note:** The system should dynamically populate these details from the registration data. The exact format of the greeting and the displayed information can be adjusted for better user experience.

### 4. Login Page

**Description:** This page allows registered customers and admins to log in to their accounts.

**Fields:**
*   **User ID:** Text field with real-time validation.
*   **Password:** Password field with real-time validation.

**Button:**
*   **Sign In**

**Links:**
*   **Register User:** Navigates to the customer registration page.
*   **Forgot Password:** Navigates to the 'Forgot Password' page.

### 5. Landing/Home Page

**Description:** This page serves as the central hub for users after logging in. It provides a user-friendly interface for accessing various functionalities and managing their electricity bills.

**Header:**
*   **Logo:** Placeholder for company logo (top-left corner).
*   **Company Details:** Electricity providing company name, contact information, etc.

**Navigation Bar:**
*   **View Bill:** Navigates to the 'View/Pay Bill' page.
*   **Register Complaint:** Navigates to the 'Register Complaint' page.
*   **View Complaint:** Navigates to the 'View Complaint' page.
*   **View Profile:** Navigates to the user's profile page.
*   **Logout:** Logs the user out of the application.

**Main Content:**
*   Dummy details about the electricity providing company (can be replaced with relevant information or a welcome message).

**Footer:**
*   Placeholder text for footer (e.g., copyright information, terms of service).

### 6. View/Pay Bill Page
**Description:** This page allows users to view their current and past bills and make payments.

**Header and Footer:**
*   Same as Landing Page.
*   Navigation bar: Remove 'View Bill', add 'Home'.

**Past Bills Section:**
*   Table with columns:
    *   Consumer Number
    *   Checkbox (to select bills for payment)
    *   Amount Due
    *   Amount Payable (cumulative if past bills are unpaid)

**Buttons:**
*   **Pay Now:** Proceeds to the payment portal.
*   **Go Back:** Returns to the Landing Page.

**Sub-pages:**
*   **Bill Payment (Payment Portal):**
    **Description:** Secure payment gateway for processing bill payments.

    **General Design:**
    *   Standard payment portal layout with clear instructions.
    *   Secure design to protect sensitive information.

    **Fields:**
    *   Payment Method Selection: Dropdown/radio buttons for choosing Credit Card, Debit Card, Net Banking, UPI, etc.
    *   Card details fields (if applicable): Card Number, Expiry Date, CVV, etc.
    *   Amount Payable: Auto-filled from the selected bill(s) and should not be editable.

    **Buttons:**
    *   **Pay Now:** Submits the payment.
    *   **Cancel/Go Back:** Returns to the 'View/Pay Bill' page.

    **Validations:**
    *   All fields should have appropriate real-time validations based on the selected payment method.

*   **Payment Acknowledgement:** Confirmation of successful/failed payments with receipt download option.
    **Description:** This page is displayed after a successful payment. It confirms the payment, shows the transaction details, and provides an option to download a receipt.

    **Content:**
    *   **Payment Status:** A prominent message indicating whether the payment was successful or failed. For successful payments, display "Payment Successful!".
    *   **Transaction ID:** Unique identifier for the transaction.
    *   **Amount Paid:** The total amount paid.
    *   **Date:** The date and time of the payment.
    *   **Payment Method:** The method used for the payment (e.g., Credit Card, Debit Card, Net Banking, UPI).

    **Buttons:**
    *   **Download Receipt:** Allows the user to download a PDF receipt of the transaction.

    **Note:** No header and footer for this page.



### 7. Register Complaint Page

### 8. View Complaint Page

### 9. Admin Dashboard

### 10. Reports Page


## Further Details

Detailed descriptions of each page's functionality, UI elements, and user interactions will be added later. This will include information on:

*   Specific input fields and their validation rules.
*   Data flow and processing logic.
*   UI design and layout considerations.
*   Error handling and user feedback mechanisms.
*   Security considerations.
*   Integration with external systems (if applicable).



**Note:** This is a preliminary design document and is subject to change as the project progresses.