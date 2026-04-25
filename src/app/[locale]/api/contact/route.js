import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM, // e.g. onboarding@resend.dev
      to: process.env.CONTACT_TO, // e.g. delivered@resend.dev
      subject: `New message from ${name}`,
      replyTo: email, // ✅ correct property name
      text: message,
    });

    // return Resend’s response to frontend
    return Response.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Resend error:", error);

    // return error details so frontend can display them
    return Response.json(
      {
        success: false,
        error: error.message || error,
      },
      { status: 500 }
    );
  }
}
