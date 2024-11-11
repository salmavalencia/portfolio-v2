import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
const requests = {};
const RATE_LIMIT = 1;
const TIME_WINDOW = 60 * 1000;

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.ip;
    const currentTime = Date.now();

    if (!requests[ip]) {
      requests[ip] = { count: 1, startTime: currentTime };
    } else {
      if (currentTime - requests[ip].startTime < TIME_WINDOW) {
        if (requests[ip].count >= RATE_LIMIT) {
          return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
        requests[ip].count += 1;
      } else {
        requests[ip] = { count: 1, startTime: currentTime };
      }
    }
    const { data } = await req.json();

    const dataUser = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['salmavalencia4@gmail.com'],
      subject: `${data.fullName} wants to contact you`,
      react: EmailTemplate({ fullName: data.fullName, email: data.email, message: data.message}),
    })

    return NextResponse.json(dataUser, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      error,
      { status: 500 }
    );
  }
}
