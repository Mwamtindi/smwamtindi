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

    const apiKey = (process.env.RESEND_API_KEY || "")
      .trim()
      .replace(/^["']|["']$/g, "");

    if (!apiKey || !apiKey.startsWith("re_")) {
      return res.status(500).json({
        message: "Invalid or missing RESEND_API_KEY in Vercel.",
      });
    }

    const response = await fetch("https://resend.com", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "resend-node:4.0.0",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["cybertawk@gmail.com"],
        reply_to: email,
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", data);
      return res.status(response.status).json({
        message:
          data.message || "Unable to send your message. Please try again.",
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
