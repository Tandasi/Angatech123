import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const { name, email, consultationType } = req.body;
		if (!name || !email || !consultationType) {
			return res.status(400).json({ success: false, error: "Missing required fields." });
		}
		// Here you can add logic to send confirmation email, store booking, etc.
		return res.status(200).json({ success: true, message: "Booking confirmation sent." });
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
