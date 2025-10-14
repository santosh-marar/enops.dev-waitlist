import React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface WaitlistWelcomeEmailProps {
  email?: string;
}

export default function WaitlistWelcomeEmail({
  email = "user@example.com",
}: WaitlistWelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to enops.dev - AI-Powered Schema Generation</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={terminalHeader}>
            <Section style={headerContent}>
              <Text style={terminalTitle}>enops.dev</Text>
            </Section>
          </Section>

          {/* Command-line style welcome message */}
          <Section style={commandSection}>
            <Text style={commandPrompt}>$ welcome --user={email}</Text>
            <Text style={commandOutput}>✓ Successfully added to waitlist</Text>
          </Section>

          {/* Welcome Message */}
          <Section style={content}>
            <Text style={paragraph}>
              You're now on the early access list for{" "}
              <span style={inlineCode}>enops.dev</span> - the AI-powered schema
              generation platform that developers actually want to use.
            </Text>
            <Text style={paragraph}>
              We're building the missing piece in your development workflow:
              intelligent database design that speaks your language.
            </Text>
          </Section>

          <Section style={featuresSection}>
            <Text style={sectionLabel}>// WHAT_YOU_GET</Text>

            <Section style={codeBlock}>
              <Text style={codeComment}>// 01. AI Schema Generation</Text>
              <Text style={codeLine}>
                <span style={codeKeyword}>describe</span>
                <span style={codeString}>
                  ("your database in plain English")
                </span>
              </Text>
              <Text style={codeLine}>
                <span style={codeComment}>
                  → AI generates optimized schemas instantly
                </span>
              </Text>
            </Section>

            <Section style={codeBlock}>
              <Text style={codeComment}>// 02. Visual Schema Designer</Text>
              <Text style={codeLine}>
                <span style={codeKeyword}>visualize</span>
                <span style={codeString}>(schema)</span>
              </Text>
              <Text style={codeLine}>
                <span style={codeComment}>
                  → Interactive ER diagrams with drag-and-drop
                </span>
              </Text>
            </Section>

            <Section style={codeBlockLast}>
              <Text style={codeComment}>// 03. Multi-Format Export</Text>
              <Text style={codeLine}>
                <span style={codeKeyword}>export</span>
                <span style={codeString}>
                  (["SQL", "Prisma", "Drizzle", "TypeORM"])
                </span>
              </Text>
              <Text style={codeLine}>
                <span style={codeComment}>
                  → Choose your stack, we handle the rest
                </span>
              </Text>
            </Section>
          </Section>

          {/* Terminal-style status box */}
          <Section style={statusBox}>
            <Text style={statusLabel}>STATUS</Text>
            <Hr style={divider} />
            <Text style={statusText}>
              <span style={statusKey}>email:</span>{" "}
              <span style={statusValue}>{email}</span>
            </Text>
            <Text style={statusText}>
              <span style={statusKey}>status:</span>{" "}
              <span style={statusValue}>waitlist_confirmed</span>
            </Text>
            <Text style={statusText}>
              <span style={statusKey}>notify:</span>{" "}
              <span style={statusValue}>on_launch</span>
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Questions? Reply to this email or visit{" "}
              <Link href="https://enops.dev" style={link}>
                enops.dev
              </Link>
            </Text>
            <Text style={footerSignature}>
              <span style={footerCode}>
                // Built for developers, by developers
              </span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#0a0a0a",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
};

const terminalHeader = {
  marginBottom: "32px",
};

const headerContent = {
  padding: "12px 0",
};

const terminalTitle = {
  color: "#10b981",
  fontSize: "20px",
  fontWeight: "700" as const,
  margin: "0",
  letterSpacing: "0.5px",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const commandSection = {
  backgroundColor: "#111827",
  border: "1px solid #1f2937",
  borderRadius: "4px",
  padding: "12px 16px",
  marginBottom: "24px",
};

const commandPrompt = {
  color: "#10b981",
  fontSize: "13px",
  margin: "0 0 8px 0",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const commandOutput = {
  color: "#6ee7b7",
  fontSize: "13px",
  margin: "0",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const content = {
  marginBottom: "32px",
};

const paragraph = {
  color: "#d1d5db",
  fontSize: "14px",
  lineHeight: "22px",
  marginBottom: "16px",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const inlineCode = {
  backgroundColor: "#1f2937",
  color: "#10b981",
  padding: "2px 6px",
  borderRadius: "3px",
  fontSize: "13px",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const featuresSection = {
  backgroundColor: "#0d1117",
  border: "1px solid #1f2937",
  borderRadius: "4px",
  padding: "20px",
  marginBottom: "32px",
};

const sectionLabel = {
  color: "#6b7280",
  fontSize: "11px",
  fontWeight: "600" as const,
  letterSpacing: "1px",
  marginBottom: "16px",
  marginTop: "0",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const codeBlock = {
  marginBottom: "20px",
  paddingBottom: "16px",
  borderBottom: "1px solid #1f2937",
};

const codeBlockLast = {
  marginBottom: "0",
  paddingBottom: "0",
};

const codeComment = {
  color: "#6b7280",
  fontSize: "12px",
  margin: "0 0 8px 0",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const codeLine = {
  color: "#d1d5db",
  fontSize: "13px",
  margin: "4px 0",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
  lineHeight: "20px",
};

const codeKeyword = {
  color: "#a78bfa",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const codeString = {
  color: "#6ee7b7",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const statusBox = {
  backgroundColor: "#111827",
  border: "2px solid #10b981",
  borderRadius: "4px",
  padding: "20px",
  marginBottom: "32px",
};

const statusLabel = {
  color: "#10b981",
  fontSize: "11px",
  fontWeight: "700" as const,
  letterSpacing: "2px",
  margin: "0 0 12px 0",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const divider = {
  borderColor: "#1f2937",
  margin: "0 0 12px 0",
};

const statusText = {
  color: "#d1d5db",
  fontSize: "13px",
  margin: "6px 0",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const statusKey = {
  color: "#6b7280",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const statusValue = {
  color: "#10b981",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
  fontWeight: "600" as const,
};

const footer = {
  borderTop: "1px solid #1f2937",
  paddingTop: "24px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "20px",
  margin: "8px 0",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};

const link = {
  color: "#10b981",
  textDecoration: "none",
};

const footerSignature = {
  marginTop: "12px",
};

const footerCode = {
  color: "#4b5563",
  fontSize: "11px",
  fontFamily: "'Geist Mono','Courier New', Courier, monospace",
};
