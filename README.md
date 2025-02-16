# Referral API

This project is a Node.js application that provides RESTful APIs for handling referral form data. It connects to a MySQL database using Prisma ORM and implements error handling and email notifications.

## Features

- RESTful API endpoints for submitting and managing referrals.
- MySQL database integration using Prisma ORM.
- Input validation for referral form data.
- Error handling middleware to manage application errors.
- Email notifications sent via Google Mail Service API upon successful referral submission.

## Project Structure

```
├── config
├── controllers
├── middleware
├── models
├── prisma
├── routes
├── services
├── types
├── utils
└── app.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd referral-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your environment variables in the `.env` file:
   ```
   DATABASE_URL=<your-database-url>
   EMAIL_USER=<your-email>
   EMAIL_PASS=<your-email-password>
   ```

## Usage

To start the application, run:
```
npm start
```

The server will start on the specified port, and you can access the API endpoints for managing referrals.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.