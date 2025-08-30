// Force Node.js to prioritize IPv4 DNS resolution to avoid EDNS timeout errors
import dns from "dns";
dns.setDefaultResultOrder && dns.setDefaultResultOrder("ipv4first");
import nodemailer from "nodemailer";

import type { NextRequest } from "next/server";
// Temporary in-memory store for demo purposes
const bookings: Array<{ email: string; phone?: string }> = [];

export async function POST(req: NextRequest) {
	try {
			const { name, email, phone, consultationType, date, time } = await req.json();
			if (!name || !email || !consultationType) {
				return new Response(JSON.stringify({ success: false, error: "Missing required fields." }), { status: 400 });
			}
			// Check for duplicate booking by email or phone
			const duplicate = bookings.find(
				(b) => b.email === email || (phone && b.phone === phone)
			);
			if (duplicate) {
				return new Response(JSON.stringify({ success: false, error: "A booking with this email or phone already exists." }), { status: 409 });
			}
				// Store booking
				bookings.push({ email, phone });

				// Send email notification
				const transporter = nodemailer.createTransport({
					host: process.env.SMTP_HOST,
					port: Number(process.env.SMTP_PORT),
					secure: process.env.SMTP_SECURE === "true",
					auth: {
						user: process.env.SMTP_USER,
						pass: process.env.SMTP_PASS,
					},
				});

						const mailOptions = {
							from: process.env.SMTP_FROM,
							to: email,
							subject: `Booking Confirmation - ${consultationType}`,
							text: `Hi ${name},

Thank you for booking a consultation with us at AngaTech!
Your session has been confirmed, and we’re excited to connect.

Consultation Details
- Topic: ${consultationType}
- Date & Time: ${date || "(date not provided)"}, ${time || "(time not provided)"}
- Format: Online via Zoom (link will be sent separately)
- Reference ID: [Booking ID]

This session is your space to explore ideas, ask questions, and get expert guidance tailored to your goals. If you need to reschedule or update your preferences, just reply to this email or reach us at info@anga-tech.com.

We’ll send a reminder 24 hours before your appointment, along with any prep materials if needed.

Looking forward to a productive and inspiring conversation.

Warm regards,
The AngaTech Team
https://anga-tech.com | @AngaTechAfrica`,
						};

				try {
					await transporter.sendMail(mailOptions);
				} catch (mailError) {
					console.error("Email send error:", mailError);
					// Optionally, you can return a warning but still confirm booking
				}

				return new Response(JSON.stringify({ success: true, message: "Booking received and confirmation email sent." }), { status: 201 });
	} catch (error: unknown) {
		console.error("Booking error:", error);
		let errorMsg = "Unknown error";
		if (error && typeof error === "object" && "message" in error) {
			errorMsg = (error as { message: string }).message;
		}
		return new Response(JSON.stringify({ success: false, error: errorMsg }), { status: 500 });
	}
}
