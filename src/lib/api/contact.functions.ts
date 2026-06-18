import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactInquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().email("A valid email is required."),
  phone: z.string().trim().optional().default(""),
  location: z.string().trim().optional().default(""),
  scope: z.string().trim().optional().default(""),
  message: z.string().trim().min(1, "Project details are required."),
});

export const sendContactInquiry = createServerFn({ method: "POST" })
  .inputValidator(contactInquirySchema)
  .handler(async ({ data }) => {
    const { sendContactEmail } = await import("../email/contact-mail.server");

    await sendContactEmail(data);

    return {
      ok: true,
    };
  });
