import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Please complete all required fields." });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["cybertawk@gmail.com"],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        message: error.message || "Unable to send your message. Please try again.",
      });
    }

    return res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      message: error.message || "Something went wrong. Please try again later.",
    });
  }
}
