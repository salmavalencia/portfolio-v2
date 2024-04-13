import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
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
