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

    const apiKey = (process.env.RESEND_API_KEY || "").trim();
    if (!apiKey) {
      return res
        .status(500)
        .json({ message: "RESEND_API_KEY is missing in Vercel." });
    }

    const response = await fetch("https://resend.com", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "PortfolioContactForm/1.0",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["cybertawk@gmail.com"],
        reply_to: email,
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    const rawText = await response.text();
    let data = {};
    try {
      data = JSON.parse(rawText);
    } catch {
      console.error("Non-JSON response from Resend:", response.status, rawText.slice(0, 200));
      return res.status(502).json({
        message: `Resend returned status ${response.status} (non-JSON). Check your RESEND_API_KEY in Vercel.`,
      });
    }

    if (!response.ok) {
      console.error("Resend API error:", data);
      return res.status(response.status).json({
        message: data.message || "Unable to send your message. Please try again.",
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
