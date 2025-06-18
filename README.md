# 📧 Serverless Email API using AWS Lambda & Node.js

This project is a lightweight REST API built with the Serverless Framework. It uses AWS Lambda to send emails using Node.js and Nodemailer over Gmail's SMTP.

---

## 🚀 Features

- REST API endpoint to send emails (`POST /send-email`)
- Built with Node.js and AWS Lambda (Serverless Framework)
- Secured via environment variables
- Supports local testing using `serverless-offline`

---

## 🛠️ Tech Stack

- Node.js
- Serverless Framework
- AWS Lambda + API Gateway
- Nodemailer
- dotenv

---

## 📁 Folder Structure

```
email-api/
├── handler.js
├── serverless.yml
├── .env                 # Not tracked in Git (contains secrets)
├── .gitignore
└── package.json
```

---

## 📦 Setup Guide

### 1. Clone the repository

```bash
git clone https://github.com/AMANKUMAR22MCA/serverless-email-api.git
cd serverless-email-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file in the root directory:

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
```

> ⚠️ **Note:** Use a Gmail **App Password**, not your regular password.  
> Go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) and generate a password for the app.

---

## 🧪 Local Testing

You can test the API locally with `serverless-offline`:

```bash
npx serverless offline
```

Then send a `POST` request to:

```
http://localhost:3000/dev/send-email
```

With body:
```json
{
  "receiver_email": "someone@example.com",
  "subject": "Hello!",
  "body_text": "This is a test email sent from my local serverless API."
}
```

---

## ☁️ Deploy to AWS (Production)

### 1. Configure AWS CLI (one-time setup)

```bash
aws configure
```

Enter your:
- AWS Access Key
- AWS Secret Key
- Region (e.g., `us-east-1`)

### 2. Deploy to AWS Lambda

```bash
npx serverless deploy
```

You’ll receive a URL like this:

```
POST - https://xxxxxx.execute-api.us-east-1.amazonaws.com/dev/send-email
```

Use this URL to send live emails.

---

## 🧾 Sample API Request

```http
POST https://your-api.execute-api.us-east-1.amazonaws.com/dev/send-email
Content-Type: application/json

{
  "receiver_email": "to@example.com",
  "subject": "Welcome",
  "body_text": "Your email API is live!"
}
```

---

## 🔐 Security

- Do **not** commit `.env` or any secrets.
- Rotate credentials regularly
- Use HTTPS only in production environments

---


## 🧾 Screenshots 

![task2 1](https://github.com/user-attachments/assets/6a2ba67f-290d-4727-8f54-3dcdd12a0e22)
<br>
![task2 2](https://github.com/user-attachments/assets/0b74c450-d2bd-4be5-bf9c-96778534f887)
<br>
![task2 3](https://github.com/user-attachments/assets/4dc60a4e-451f-4eeb-917b-317d5facb307)

