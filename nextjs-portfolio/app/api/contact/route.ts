import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const b = await req.json().catch(() => null);

    const ok =
      b?.name &&
      /^\S+@\S+\.\S+$/.test(b?.email ?? "") &&
      b?.message;

    if (!ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid input",
        },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;

    if (!process.env.RESEND_API_KEY || !contactEmail) {
      console.error("Resend environment variables are missing");

      return NextResponse.json(
        {
          ok: false,
          error: "Email service is not configured",
        },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: b.email,
      subject: `Portfolio Contact: ${b.name}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${b.name}</p>

        <p><strong>Email:</strong> ${b.email}</p>

        <p><strong>Message:</strong></p>

        <p>
          ${b.message.replace(/\n/g, "<br />")}
        </p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          ok: false,
          error: "Failed to send email",
        },
        { status: 500 }
      );
    }

    console.log("Email sent:", data?.id);

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
