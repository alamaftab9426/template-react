import nodemailer from 'nodemailer';

// Placeholder transporter - fill with real credentials in .env when ready
export function createTransporter() {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_HOST || !EMAIL_PORT) {
    // Return a dummy transporter that logs emails instead of sending
    return {
      sendMail: async (options) => {
        console.log('Email send simulated. Options:', options);
        return Promise.resolve({ accepted: [], rejected: [] });
      },
    };
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT) || 587,
    secure: false,
    auth: EMAIL_USER && EMAIL_PASS ? { user: EMAIL_USER, pass: EMAIL_PASS } : undefined,
  });

  return transporter;
}
