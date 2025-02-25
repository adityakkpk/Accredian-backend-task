import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify connection configuration
transporter.verify(function (error) {
  if (error) {
    console.log('Email verification error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});