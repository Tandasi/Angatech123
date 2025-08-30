import nodemailer from "nodemailer";

import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	const { name, email, message } = await req.json();

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: process.env.SMTP_SECURE === "true", // use env var for secure
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		const mailOptions = {
			from: process.env.SMTP_FROM,
			to: process.env.ADMIN_EMAIL,
			subject: `New Contact Form Submission from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
		};

		try {
			await transporter.sendMail(mailOptions);
			return new Response(JSON.stringify({ success: true }), { status: 200 });
		} catch (error: unknown) {
				console.error("Email send error:", error);
				let errorMsg = "Unknown error";
				if (error && typeof error === "object" && "message" in error) {
					errorMsg = (error as { message: string }).message;
				}
				return new Response(JSON.stringify({ success: false, error: errorMsg }), { status: 500 });
		}
}
