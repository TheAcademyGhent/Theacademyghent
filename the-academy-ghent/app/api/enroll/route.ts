import { NextRequest, NextResponse } from "next/server";

// TODO: koppel aan een e-mailservice en/of CRM om aanvragen automatisch
// naar de juiste coach te routeren op basis van 'classSlug'.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, classSlug } = body;

    if (!name || !email || !phone || !classSlug) {
      return NextResponse.json(
        { error: "Naam, e-mail, telefoon en gewenste les zijn verplicht." },
        { status: 400 }
      );
    }

    console.log("Nieuwe proefles-aanvraag:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }
}
