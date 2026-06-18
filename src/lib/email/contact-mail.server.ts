import process from "node:process";
import nodemailer from "nodemailer";

type ContactEmailInput = {
  email: string;
  location: string;
  message: string;
  name: string;
  phone: string;
  scope: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactEmail(input: ContactEmailInput) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail =
    process.env.CONTACT_TO_EMAIL ?? "seasonslandscapersmedia@gmail.com";

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !fromEmail) {
    throw new Error("MAIL_SERVICE_NOT_CONFIGURED");
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const html = `
    <h2>New contact inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(input.phone || "Not provided")}</p>
    <p><strong>Project location:</strong> ${escapeHtml(input.location || "Not provided")}</p>
    <p><strong>Scope of work:</strong> ${escapeHtml(input.scope || "Not provided")}</p>
    <p><strong>Project details:</strong></p>
    <p>${escapeHtml(input.message).replaceAll("\n", "<br />")}</p>
  `;

  const text = [
    "New contact inquiry",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || "Not provided"}`,
    `Project location: ${input.location || "Not provided"}`,
    `Scope of work: ${input.scope || "Not provided"}`,
    "",
    "Project details:",
    input.message,
  ].join("\n");

  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    replyTo: input.email,
    subject: `New inquiry from ${input.name}`,
    html,
    text,
  });
}
