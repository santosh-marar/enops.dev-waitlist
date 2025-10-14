import { google } from "googleapis";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import WaitlistWelcomeEmail from "@/emails/waitlist-welcome";

const sheets = google.sheets("v4");
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    // Normalize email (lowercase and trim)
    const normalizedEmail = email.toLowerCase().trim();

    // Setup Google Sheets Auth
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Check if email already exists
    const existingData = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
      range: "Sheet1!A:A",
    });

    const existingEmails = existingData.data.values || [];
    const emailExists = existingEmails.some(
      (row) => row[0]?.toLowerCase().trim() === normalizedEmail
    );

    if (emailExists) {
      return NextResponse.json(
        { message: "You're already on the waitlist!" },
        { status: 409 } // 409 Conflict
      );
    }

    // Add to Google Sheets
    await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
      range: "Sheet1!A:B",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[normalizedEmail, new Date().toISOString()]],
      },
    });

    // Send welcome email
    await resend.emails.send({
      from: "enops.dev <waitlist@waitlist.enops.dev>", // Updated domain
      to: normalizedEmail,
      subject: "Welcome to enops.dev - You're on the Waitlist!",
      react: WaitlistWelcomeEmail({ email: normalizedEmail }),
    });

    return NextResponse.json(
      { message: "Added to waitlist!" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
