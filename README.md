# Enops.dev Waitlist

<img width="256" height="256" alt="plogo" src="https://github.com/user-attachments/assets/1a281589-93ca-43ad-9b7a-60ee1762b039" />

A beautiful, terminal-themed waitlist landing page for **enops.dev** - an AI-powered schema generation platform. Built with Next.js 15, React Email, and integrated with Google Sheets and Resend.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Terminal UI** - Developer-focused design with animated text and gradient effects
- 📧 **Email Integration** - Automated welcome emails using React Email & Resend
- 📊 **Google Sheets Database** - Simple waitlist management without complex databases
- 🛡️ **Duplicate Prevention** - Email validation and duplicate entry protection
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎭 **Smooth Animations** - Framer Motion for beautiful page transitions
- 🍞 **Toast Notifications** - Beautiful feedback using Sonner
- ⚡ **Edge Ready** - Deployable to Vercel with zero configuration

## 🎯 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Email:** [React Email](https://react.email/) + [Resend](https://resend.com/)
- **Database:** [Google Sheets API](https://developers.google.com/sheets/api)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [aceternity.com](https://ui.aceternity.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + [Tabler Icons](https://tabler.io/icons)

## 📦 Installation

### Prerequisites

- Node.js 18+ or Bun
- A Google Cloud account
- A Resend account
- pnpm (recommended) or npm

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/enops-waitlist.git
cd enops-waitlist
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
```

### 3. Set up Google Sheets

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Google Sheets API**:
   - Go to **APIs & Services** → **Library**
   - Search "Google Sheets API" → Enable
4. Create a **Service Account**:
   - Go to **APIs & Services** → **Credentials**
   - Click **+ CREATE CREDENTIALS** → **Service Account**
   - Name it (e.g., `waitlist-service`)
   - Click **CREATE AND CONTINUE** → **DONE**
5. Create and download the **JSON key**:
   - Click on the service account
   - Go to **Keys** tab
   - **ADD KEY** → **Create new key** → **JSON**
   - Save the file securely
6. Create a Google Sheet and **share it** with the service account email (with Editor access)

### 4. Set up Resend

1. Sign up at [resend.com](https://resend.com/)
2. Verify your domain:
   - Go to **Domains** → **Add Domain**
   - Add DNS records to your domain
3. Get your API key from **API Keys** section

### 5. Configure environment variables

Create `.env.local` in the root directory:

```env
# Google Sheets Configuration
GOOGLE_SHEETS_CLIENT_EMAIL=your-service@project-id.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_Private_Key_Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here

# Resend Configuration
RESEND_API_KEY=re_your_resend_api_key_here
```

**Note:** 
- The `GOOGLE_SHEETS_PRIVATE_KEY` must be wrapped in quotes and keep the `\n` characters
- Get the Spreadsheet ID from the URL: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`

### 6. Run the development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

### Test Google Sheets Connection

```bash
npx tsx scripts/test-sheets.ts
```

### Test Email Sending

```bash
npx tsx scripts/test-email.ts
```

Update the recipient email in `scripts/test-email.ts` before running.

## 📁 Project Structure

```
enops-waitlist/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # API endpoint for waitlist
│   ├── layout.tsx                # Root layout with Toaster
│   └── page.tsx                  # Landing page
├── components/
│   └── ui/                       # Reusable UI components
├── emails/
│   └── waitlist-welcome.tsx      # Email template
├── lib/
│   ├── toast-style.ts            # Toast styling
│   └── utils.ts                  # Utility functions
├── scripts/
│   ├── test-email.ts             # Email testing script
│   └── test-sheets.ts            # Google Sheets testing script
├── public/                       # Static assets
└── .env.local                    # Environment variables (create this)
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/)
3. Add environment variables in Vercel project settings
4. Deploy!

```bash
# Or use Vercel CLI
vercel --prod
```

### Environment Variables on Vercel

Add these in **Project Settings** → **Environment Variables**:
- `GOOGLE_SHEETS_CLIENT_EMAIL`
- `GOOGLE_SHEETS_PRIVATE_KEY`
- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `RESEND_API_KEY`

## 🔒 Security Notes

- Never commit `.env.local` to Git
- Add `.env.local` to `.gitignore`
- Rotate your service account keys if exposed
- Use environment variables in production
- Limit service account permissions to necessary scopes only

## 📝 License

MIT License - feel free to use this for your own projects!

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [aceternity.com](https://ui.aceternity.com/) for beautiful components
- [React Email](https://react.email/) for email templates
- [Resend](https://resend.com/) for email delivery
- [Vercel](https://vercel.com/) for hosting

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Follow [@santosh_marar](https://x.com/santosh_marar) on X/Twitter

---

**Built with ❤️ for developers, by developers**
