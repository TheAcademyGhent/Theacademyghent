import { NextRequest, NextResponse } from "next/server";

// TODO: koppel dit aan een echte e-mailservice (bv. Resend, Postmark, SendGrid)
// om binnenkomende berichten effectief naar info@theacademyghent.be te sturen.
// Voorbeeld met Resend: https://resend.com/docs/send-with-nextjs

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Naam, e-mail en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    // Log voor nu; vervang door een echte verzendactie.
    console.log("Nieuw contactbericht:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }
}
