import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const number = formData.get("number") as string;
    const position = formData.get("position") as string;

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Setup nodemailer
    // You should configure these in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || '"Quickoo Careers" <quickoosolutions@gmail.com>',
      to: "quickoosolutions@gmail.com",
      subject: `New Job Application: ${name} - ${position}`,
      text: `You have received a new job application.

Name: ${name}
Email: ${email}
Phone: ${number}
Position: ${position}

The applicant's resume is attached to this email.`,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    };

    // If no credentials are provided in env, just mock success for local testing
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("No SMTP credentials found in .env.local. Simulating email send with attachment:", file.name);
      return NextResponse.json({ success: true, mocked: true });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to submit application." }, { status: 500 });
  }
}
