import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, email, message } = body;

    if (!name || !email || !message) {
      throw createError({
        statusCode: 400,
        message: "All fields are required",
      });
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zekariyasmulugeta91@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (data.error) {
      throw createError({
        statusCode: 500,
        message: data.error.message,
      });
    }

    return {
      success: true,
      data,
    };
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message || "Failed to send email",
    });
  }
});
