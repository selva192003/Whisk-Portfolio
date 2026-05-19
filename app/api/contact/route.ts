import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // Ensure variables are defined
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables.");
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Standard Gmail service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'selvaj192003@gmail.com', // Recipient email
            replyTo: email, // This allows you to hit "Reply" and send to the user
            subject: `Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2>New Portfolio Message</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr />
                    <h3>Message:</h3>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
