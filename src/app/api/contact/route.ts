import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Placeholder: Log the submission.
    // Replace with your preferred email service (SendGrid, Resend, etc.)
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      phone: body.phone || "Not provided",
      service: body.service || "General Inquiry",
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
