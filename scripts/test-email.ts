import { config } from "dotenv";
import { Resend } from "resend";
import WaitlistWelcomeEmail from "../emails/waitlist-welcome";

config({ path: ".env.local" });

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY not found in .env.local");
    process.exit(1);
  }

  try {
    const data = await resend.emails.send({
      from: "enops.dev <waitlist@waitlist.enops.dev>", // Updated domain
      to: "dev@gmail.com",
      subject: "Test: Welcome to enops.dev",
      react: WaitlistWelcomeEmail({ email: "dev@gmail.com" }),
    });

    console.log("Email sent successfully!");
    console.log("Email ID:", data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

testEmail();