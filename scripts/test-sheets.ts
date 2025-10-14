import { config } from "dotenv";
import { google } from "googleapis";

config({ path: ".env.local" });

async function testSheets() {
  console.log("Testing Google Sheets connection...\n");

  // Check environment variables
  if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL) {
    console.error("GOOGLE_SHEETS_CLIENT_EMAIL not found");
    return;
  }
  if (!process.env.GOOGLE_SHEETS_PRIVATE_KEY) {
    console.error("GOOGLE_SHEETS_PRIVATE_KEY not found");
    return;
  }
  if (!process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
    console.error("GOOGLE_SHEETS_SPREADSHEET_ID not found");
    return;
  }

  console.log("✓ Environment variables found\n");

  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    console.log("✓ Auth created, testing connection...\n");

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Sheet1!A1:B1",
    });

    console.log("SUCCESS! Connected to Google Sheets");
    console.log("Data:", response.data.values || "No data in range");
  } catch (error: any) {
    console.error("ERROR:", error.message);
    if (error.code === 400) {
      console.error("\nPossible causes:");
      console.error("1. Service account email is incorrect");
      console.error("2. Private key is malformed");
      console.error("3. Service account doesn't exist in Google Cloud");
    }
    if (error.code === 403 || error.code === 404) {
      console.error("\nPossible causes:");
      console.error("1. Sheet ID is incorrect");
      console.error("2. Service account doesn't have access to the sheet");
      console.error("3. Google Sheets API is not enabled");
    }
  }
}

testSheets();
