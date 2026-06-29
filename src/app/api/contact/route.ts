import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, selection, message } = body;

    // Validate the required fields
    if (!name || !email || !inquiryType || !selection || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real production environment, you would configure SMTP in your .env file
    // Example: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const emailTo = process.env.CONTACT_EMAIL_TO || 'admin@quickoo.co.in';
    const emailFrom = process.env.CONTACT_EMAIL_FROM || 'noreply@quickoo.co.in';

    // Log the submission to the console for visibility (acts as a local backend)
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Inquiry Type: ${inquiryType}`);
    console.log(`Selection: ${selection}`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------------');

    // Only try to send email if SMTP credentials are provided
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${emailFrom}>`, // sending from our authenticated email
        replyTo: email, // reply to the user's email
        to: emailTo,
        subject: `New Contact Request: ${inquiryType.toUpperCase()} - ${selection}`,
        text: `
Name: ${name}
Email: ${email}
Inquiry Type: ${inquiryType}
Selection: ${selection}

Message:
${message}
        `,
        html: `
          <h3>New Contact Request from Quickoo Solutions Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <p><strong>Selection:</strong> ${selection}</p>
          <h4>Message:</h4>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully via Nodemailer.');
    } else {
      console.log('SMTP credentials not found in .env. Skipping email delivery.');
      console.log('Add SMTP_HOST, SMTP_USER, SMTP_PASS to .env to enable email sending.');
    }

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
