# My-Finance Application

## Overview
My-Finance is a financial management application that allows users to track their transactions and visualize their income and expenses. The application provides user authentication (sign-in and sign-up) to ensure personalized financial tracking.

## Features
- **User Authentication**: Secure sign-in and sign-up functionality.
- **Interactive Dashboard**: Displays financial insights through charts and tables.
- **Transaction Management**: Allows users to filter and add transactions.
- **Account Management**: Users can manage multiple accounts and transfer funds between them.
- **Profile & Settings**: Users can update personal details and change passwords.

## Pages

### 1. Dashboard
- Displays **three key financial cards**:
  - **Total Balance**
  - **Total Income**
  - **Total Expense**
- Shows a **graph** representing income and expenses over time.
- Includes a **pie chart** to display the income vs. expense percentage.
- Lists **latest transactions** of the user.

### 2. Transactions
- **Filter transactions** by date range.
- Option to **add a new transaction**.
- Displays **transactions in table format** with the following columns:
  - Date
  - Description
  - Status
  - Source
  - Amount
  - View Details

### 3. Accounts
- Option to **add an account** (Currently supports four types of accounts).
- **Transfer funds** between accounts.
- Displays **all user accounts** along with their balances.

### 4. Settings
- Displays user profile information:
  - Name
  - Email
  - Phone Number
- Users can **update personal details**.
- Option to **change the password**.

## Technologies Used
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone git@github.com:gouravg11/My-Finance-Application.git
   ```
2. Navigate to the project directory:
   ```bash
   cd My-Finance
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. For frontend setup:
   ```bash
   npm run dev
   ```

## Contact
For any queries or suggestions, feel free to reach out.

